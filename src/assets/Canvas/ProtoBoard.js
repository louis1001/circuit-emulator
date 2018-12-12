
import Nodo from './Nodo';

export default class ProtoBoard {

    constructor(name,canva,position,NodosX,NodosY,type="Normal") {
        
        this.Interval = 25;
        this.Name = "ProtoBoard"+name;
        this.Canva=canva;
        this.Position=position;
        this.Size = {x:0,y:0};
        // Dimencion de la ProtoBoard
        this.provided = {Colum:NodosX,Row:NodosY};
        // Matriz de nodos
        this.ProtoMatriz = new Array(NodosY);
        // Tipo de ProtoBoard
        this.Type=type;
        if (type=="Positive" || type == "Negative") {
            this.ColorCanva=255;
        }else {
            this.ColorCanva=255;
        }
    }

    Create()
    {   
        let separationNodo = {x:30,y:15};
        // Generar matriz de Nodos
        for (let y = 0; y < this.provided.Row; y++) {
                this.ProtoMatriz[y]= new Array(this.provided.Colum);
                separationNodo.x=10;
            for (let x = 0; x < this.provided.Colum; x++) {
                this.ProtoMatriz[y][x]= new Nodo(this.Canva,{x:separationNodo.x,y:this.Position.y + separationNodo.y},10,this.Type);
                separationNodo.x+=30;
            } 
                separationNodo.y+=this.Interval;
        }
        this.Size= {x:this.ProtoMatriz[0][this.provided.Colum-1].Position.x+30,
            y:(separationNodo.y-5)};
    }

    Render(exection = null)
    {
        this.Canva.stroke(0);
        this.Canva.strokeWeight(0);
        this.Canva.fill(this.ColorCanva);
        this.Canva.rect(this.Position.x,this.Position.y,this.Size.x,this.Size.y);
        this.Canva.fill(255);
        for (let y = 0; y < this.provided.Row; y++) {
            for (let x = 0; x < this.provided.Colum; x++) {
               
                if (exection != null && exection.x == x && exection.y == y) {
                    this.ProtoMatriz[y][x].Render(this.ProtoMatriz[y][x].ColorHover);
                }
                else  if(exection != null && exection.x == x && this.Canva.mouseIsPressed) {
                    this.ProtoMatriz[y][x].Render(this.ProtoMatriz[y][x].ColorRange);
                }
                else
                {
                    this.ProtoMatriz[y][x].Render();
                }
            }
        }
    }

    Hover()
    {
        
        
        if (this.Position.x < this.Canva.mouseX &&  this.Canva.mouseX < this.Size.x) {  
            if (this.Position.y < this.Canva.mouseY && this.Canva.mouseY < (this.Position.y+this.Size.y)) {
                let PositionX = parseInt((this.Canva.mouseX-this.Position.x)/(this.Size.x/this.provided.Colum),10);
                let PositionY = parseInt((this.Canva.mouseY-this.Position.y)/(this.Size.y/this.provided.Row),10);  
                let SelectNodo = this.ProtoMatriz[PositionY][PositionX];
                if (SelectNodo.Hover()) {
                    let InfoNodo = SelectNodo.GetNodo();
                    InfoNodo.ProtoBoard = {Name:this.Name,Type:this.Type,Position:{x:PositionX,y:PositionY}};
                    this.Render({x:PositionX,y:PositionY});
                    return InfoNodo;
                }
                else
                {
                    this.Render();
                }
            }
        }
        return null;
    }
}