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
                NewComp.Type = element.constructor.name;
           
                if (CountType[NewComp.Type] ===undefined) {
                    CountType[NewComp.Type] = 0;
                } 
                else 
                {
                     CountType[NewComp.Type] = CountType[NewComp.Type]+1;
                }
                NewComp.Name =  NewComp.Type + CountType[NewComp.Type];
                NewComp.Ins = this.GetNodo(element,element.ins);
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
                    lisNoodo.push(Nodo.ProtoBoard);
                }
                
            });  
            return lisNoodo;
        }
        PositionNodo(posicion,Pnodo)
        {
            return {x:posicion.x+(Pnodo.x*20),y:posicion.y+(Pnodo.y*20)}
        }
}