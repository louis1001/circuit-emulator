

var MyCanva = {},
ColorNodoHover = {R:0,G:177,B:106},
ColorNodoNormal = {R:81,G:81,B:81},
ColorNodoRange =  {R:248,G:255,B:163},
ColorNodoPositve = {R:29,G:137,B:255},
ColorNodoNegative = {R:255,G:31,B:85},
ColorNodoConect = {R:255,G:179,B:11},
ColorMatrizNorma = {R:255,G:255,B:255},
ColorMatrizPolo = {R:81,G:81,B:81};

import Resistencia from './CompElectronicos/Resistencia'
// import {setupIconComp} from './CompElectronicos/Component'

export default class ListProtoBoard {

    constructor(canva,count,size)
    {
        // setupIconComp(canva)
        MyCanva = canva;
        this.Count = count;
        this.Size = size;
        this.List = [];
        this.height = 0
        this.SelectNodo = {};
        this.boardComponents = []

        this.resPrueba = new Resistencia(canva)
    }

    Create()
    {
        //separacion del borde
        let count = 10;
        // crea matrices polares inciales
        count+=this.PolosCreate(count);
        // crea matrices normales
        for (let i = 0; i < this.Count; i++) {
            let NewProtoBoard= new Matrices(i+1,{x:0,y:count},{x:this.Size,y:5});
            NewProtoBoard.Create();
            this.List.push(NewProtoBoard);
            count+=NewProtoBoard.Size.y+10;
        }
        // crea matrices polares finales
        count+=this.PolosCreate(count);
        this.height = count;
    }

    PolosCreate(y)
    {  // crea y separa las matrices con polaridad
        let ProtoBoardPosit = new Matrices('+',{x:0,y:y},{x:this.Size,y:1},'Positive');
            ProtoBoardPosit.Create();
            this.List.push(ProtoBoardPosit);
        let ProtoBoardNegative = new Matrices('-',{x:0,y:y+ProtoBoardPosit.Size.y},{x:this.Size,y:1},'Negative');
            ProtoBoardNegative.Create();
            this.List.push(ProtoBoardNegative);
            // retorna el espacio que tendran las matrices siguentes
        return (ProtoBoardNegative.Size.y*2)+10;
    }

    Render()
    {
        // console.log("Hi")
        for (let i = 0; i < this.List.length; i++) {
            this.List[i].Render();
        }

        this.boardComponents.forEach(x=>{
            x.render()
        })

        this.resPrueba.pos = MyCanva.createVector(MyCanva.mouseX, MyCanva.mouseY)
        this.resPrueba.render()
    }

    AddCompBoard(){
        const elMouse = MyCanva.createVector(MyCanva.mouseX, MyCanva.mouseY)
        const NodeUnder = this.GetHoverNode(elMouse)
        if (NodeUnder){
            this.resPrueba.pos = MyCanva.createVector(NodeUnder.Position.x, NodeUnder.Position.y)

            this.boardComponents.push(this.resPrueba)

            this.resPrueba = new Resistencia(MyCanva)

            console.log(NodeUnder)
        }
    }

    GetHoverNode (elMouse){

        let hoverNode = null
        // buscala matriz en la que esta el mause
        let contador = 0;
        for (let i = 0; i < this.List.length; i++) {
            let Info = this.List[i].Hover(elMouse);
            if (Info != null) {
                contador++;
                hoverNode = Info
            }
        }
        // elimina la matriz
        if (contador==0)
        {
            hoverNode = null;
        }

        return hoverNode
    }

    Hover(elMouse)
    {
        this.SelectNodo = this.GetHoverNode(elMouse);
    }

    Click (){
        this.AddCompBoard()
    }
}

class Matrices {

    constructor(name,position,Nodos,type="Normal") {
        this.Name = "Matriz "+name;
        this.Position=position;
        this.Size = {x:0,y:0};
        // Dimencion de la ProtoBoard
        this.provided = {Colum:Nodos.x,Row:Nodos.y};
        // Matriz de nodos
        this.ProtoMatriz = new Array(Nodos.y);
        // Tipo de ProtoBoard
        this.Type=type;
        if (type=="Positive" || type == "Negative") {
            this.ColorCanva=255;
        }else {
            this.ColorCanva=255;
        }
        // separacion de Nodos
        this.Interval = 20;
    }

    Create()
    {
        let separationNodo = {x:0,y:this.Interval/2};
        // Generar matriz de Nodos
        for (let y = 0; y < this.provided.Row; y++) {
                this.ProtoMatriz[y]= new Array(this.provided.Colum);
                // reinicio la separacion
                separationNodo.x=this.Interval/2;
            for (let x = 0; x < this.provided.Colum; x++) {
                //CreoNodo
                this.ProtoMatriz[y][x]= new Nodo({x:separationNodo.x,y:this.Position.y + separationNodo.y},15,this.Type);
                // Agrupacion de 5 de las matrices neagativa y positiva
                if (x%5 == 0 && this.Type!="Normal") {
                    separationNodo.x+=15;
                }
                separationNodo.x+=this.Interval;
            }
                separationNodo.y+=this.Interval;
        }
        // tamaño de la matrices
        this.Size= {x:this.ProtoMatriz[0][this.provided.Colum-1].Position.x+30,
            y:(separationNodo.y)};
    }

    Render()
    {  //  diseña el contenedor de los nodos
        MyCanva.stroke(0);
        MyCanva.strokeWeight(0);
        let badgraud = {R:ColorMatrizNorma.R,G:ColorMatrizNorma.G,B:ColorMatrizNorma.B};
        // cambia color dependiendo del tipo de matriz
        if (this.Type!="Normal") {
            badgraud ={R:ColorMatrizPolo.R,G:ColorMatrizPolo.G,B:ColorMatrizPolo.B};
        }
        MyCanva.fill(badgraud.R,badgraud.G,badgraud.B);
        MyCanva.rect(this.Position.x,this.Position.y,this.Size.x,this.Size.y);
        MyCanva.fill(255);
        // Render de los nodos
        for (let y = 0; y < this.provided.Row; y++) {
            for (let x = 0; x < this.provided.Colum; x++) {
                // Cuando el Mause esta sobre el Nodo
                const ElNodo = this.ProtoMatriz[y][x]
                ElNodo.Render()
            }
        }
    }

    Hover(elMouse)
    {
        let excepcion = null
        let InfoNodo = null
        // verifica que el Mause este sonbre la matriz
        if (this.Position.x < elMouse.x &&  elMouse.x < this.Size.x) {
            if (this.Position.y < elMouse.y && elMouse.y < (this.Position.y+this.Size.y)) {
                //convirte la posicion del mause en una posicion en la matriz de nodos
                let PositionX = parseInt((elMouse.x-this.Position.x)/(this.Size.x/this.provided.Colum),10);
                let PositionY = parseInt((elMouse.y-this.Position.y)/(this.Size.y/this.provided.Row),10);
                // verifica si es sobre el nodo que esta el mause
                let SelectNodo = this.ProtoMatriz[PositionY][PositionX];
                if (SelectNodo.Hover(elMouse)) {
                    InfoNodo = SelectNodo.GetNodo();
                    InfoNodo.ProtoBoard = {Name:this.Name,Type:this.Type,Position:{x:PositionX,y:PositionY}};

                    excepcion = {x:PositionX,y:PositionY}
                    // return InfoNodo;
                }
            }
        }

        // Render de los nodos
        for (let y = 0; y < this.provided.Row; y++) {
            for (let x = 0; x < this.provided.Colum; x++) {
                // Cuando el Mause esta sobre el Nodo
                const ElNodo = this.ProtoMatriz[y][x]
                if (excepcion != null && excepcion.x == x && excepcion.y == y) {
                    ElNodo.currentColor = ElNodo.ColorHover
                }
                // Cuando un nodo esta conectado con el node en el que Mause esta sobre el
                // Como es una matriz es norma son los nodos en X los que estan conectados
                else  if(excepcion != null && excepcion.x == x && MyCanva.mouseIsPressed && this.Type=="Normal") {
                    ElNodo.currentColor = ElNodo.ColorRange
                }
                // Cuando un nodo esta conectado con el node en el que Mause esta sobre el
                // Como es una matriz con polaridad los  nodos conectados son los que este en Y
                else  if(excepcion != null && excepcion.y == y && MyCanva.mouseIsPressed && this.Type!="Normal") {
                    ElNodo.currentColor = ElNodo.ColorRange
                }
                // redender normal
                else
                {
                    ElNodo.currentColor = ElNodo.Color
                }
            }
        }

        return InfoNodo;
    }
}

class Nodo
{
    constructor(position,size,type)
    {
        this.Position=position;
        // los bordes son el 20% del Nodo
        this.border = size * 0.2;
        // el tamano del 60% para haser el total del Nodo
        this.Size = size * 0.6;

        //Colores de los estados de los nodos
            this.ColorHover = ColorNodoHover;
            this.ColorConect = ColorNodoConect;
            this.ColorRange = ColorNodoRange;

            //Define color que representara al Nodo
            if (type=="Positive") {
                this.Color = ColorNodoPositve;
            }else if (type == "Negative") {
                this.Color = ColorNodoNegative;
            }else {
                this.Color = ColorNodoNormal;
            }

        this.currentColor = this.Color
    }
    Render()
    {
        MyCanva.strokeWeight(this.border);
        MyCanva.stroke(this.currentColor.R, this.currentColor.G, this.currentColor.B);
        // MyCanva.fill(Fill.R,Fill.G,Fill.B);
        MyCanva.noFill()
        MyCanva.rect(this.Position.x,this.Position.y,this.Size,this.Size);
        MyCanva.stroke(0);
        MyCanva.strokeWeight(0);
    }
    // verifica si el mause esta sobre el nodo
    Hover(elMouse)
    {
        if (this.Position.x-this.border < elMouse.x && this.Position.x+this.Size+this.border > elMouse.x) {
            if (this.Position.y-this.border < elMouse.y && this.Position.y+this.Size+this.border > elMouse.y) {
                    return true;
            }
        }
        return false;
    }
    // retorna la informacion del nodo
    // Le campo Matriz esta basio por que es rellenado por el obejto matrices
    GetNodo(){
        return {
            Position: this.Position,
            Size:this.Size + (this.border*2),
            Matriz:{

            }
        }
    }
}