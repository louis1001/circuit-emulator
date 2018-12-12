import Pl from 'tau-prolog';
import Convert from './ConvertProlog';
import fs from 'fs';

export default class PrologDc {
    constructor(objet)
    {
        this.TauBC={};
        this.BCtauProlog="";
        this.Objet=objet;
        this.Cable="";
        this.Component="";
    }
    Create(callback)
    {
            let convert = new Convert();
            this.Cable=convert.CreatePredicado(this.Objet.Cable,'cable');
            this.Component=convert.CreatePredicado(this.Objet.Component,'componente');
            this.Predicado= this.Cable + this.Component;
            fs.readFile('Datos/Leyes.txt','utf-8',(err,dt)=>{
                if (err) {
                    throw err;
                }else{
                this.BCtauProlog=this.Predicado + dt;
                this.TauBC = new Pl.create();
                this.TauBC.consult(this.BCtauProlog);
                }
                callback(null,this);
            });
    }
    Consult(consult,callback)
    {
        this.TauBC.query(consult);
        let call = function( answer ) { 
            let value = Pl.format_answer(answer);
            let Term = value.toString();
            Term = Term.replace(/=/g,'":').replace(/'/g,'"').replace(/ /g,"").replace(/;/g,"");
            Term = `{"${Term}}`;
            let ConvertJson = JSON.parse(Term);
            callback(null,ConvertJson);};
        this.TauBC.answer(call);
    }

}
