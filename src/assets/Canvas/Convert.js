export default class Convert
{
    constructor(lisProtoBoard)
    {
        this.ListComp = lisProtoBoard.boardComponents;
        this.LisProtoBoard = lisProtoBoard;
    }
    ConvertVectorAndNodo()
        {
            let NewListComp = [];
            let CountType = {};
            this.ListComp.forEach(element => {
                let NewComp = {};
                NewComp.Type = (typeof element)
                if (CountType[NewComp.Type]!==undefined) {
                    CountType[NewComp.Type]=0;
                } 
                else 
                {
                     CountType[NewComp.Type]= CountType[NewComp.Type]+1;
                }
                NewComp.Name =  NewComp.Type + CountType[NewComp.Type];
                console.log('In');
                console.log(element.ins);
                NewComp.Ins = this.GetNodo(element,element.ins);
                console.log('Out');
                console.log(element.outs);
                NewComp.Outs = this.GetNodo(element,element.outs);
                NewComp.Voltege = 0;
                NewComp.Intencidad = 0;
                NewComp.Resistencia = 0;
                NewListComp.push(NewComp);
            });
            return NewListComp;
        }
        GetNodo(Comp,PsNodo)
        {
            let lisNoodo =[];
            PsNodo.forEach(element => {
                let PositionBusqueda = this.PositionNodo(Comp.pos,element);
                let Nodo = this.LisProtoBoard.GetHoverNode({x:PositionBusqueda.x,y:PositionBusqueda.y});
                if (Nodo!==undefined) {
                    Nodo.ProtoBoard.CanvasPosition = PositionBusqueda;
                    console.log("Posicion En Canvas");
                    console.log(Nodo.ProtoBoard.CanvasPosition);
                    console.log("Posicion En Protoboard");
                    console.log(Nodo.ProtoBoard.Position);
                    lisNoodo.push(Nodo.ProtoBoard);
                }
                
            });  
            return lisNoodo;
        }
        PositionNodo(posicion,Pnodo)
        {
            console.log('size comp');
            console.log({x:posicion.x,y:posicion.y});
            
            if (Pnodo.x==0) Pnodo.x = 1
            if (Pnodo.y==0) Pnodo.y = 1
            console.log('Position Nodo');     
            console.log({x:Pnodo.x,y:Pnodo.y});
            return {x:Pnodo.x*posicion.x,y:Pnodo.y*posicion.y}
        }
}