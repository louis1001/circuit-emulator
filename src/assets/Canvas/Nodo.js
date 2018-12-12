export default class Nodo 
{
    constructor(canva,position,size,type="Normal")
    {
        this.Canva=canva;
        this.Position=position;
        this.Size=size;
        this.border = size * 0.4;
        //Colores de los nodos 
            this.ColorHover = {R:0,G:177,B:106}; // EL mouse sobre el Nodo
            this.ColorConect = {R:255,G:179,B:11}; // Componente o cable conectado en el Nodo
            this.ColorRange = {R:248,G:255,B:163}; // Nodos que comparten señal con el Nodo selecionado

            //Define color que representara al Nodo
            if (type=="Positive") {
                this.Color = {R:29,G:137,B:255}; // Nodo que condice la energia de polaridad positiva 
            }else if (type == "Negative") {
                this.Color = {R:255,G:31,B:85}; // Nodo que condice la energia de polaridad negativa
            }else {
                this.Color = {R:81,G:81,B:81}; // Estado Normal del Nodo
            }
    }
    Render(Color = this.Color)
    {
        this.Canva.strokeWeight(this.border);
        this.Canva.stroke(Color.R,Color.G,Color.B);
        this.Canva.rect(this.Position.x,this.Position.y,this.Size,this.Size);
        this.Canva.stroke(0);
        this.Canva.strokeWeight(0);
    }
    Hover()
    {
        if (this.Position.x-this.border < this.Canva.mouseX && this.Position.x+this.Size+this.border > this.Canva.mouseX) {
            if (this.Position.y-this.border < this.Canva.mouseY && this.Position.y+this.Size+this.border > this.Canva.mouseY) {
                    return true;
            }
        }
        return false;
    }

    GetNodo(){return{Position:this.Position,Size:this.Size+(this.border*2),ProtoBoard:{}}}
}