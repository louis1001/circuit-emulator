
export default class ConvertProlog {

    Convert(data,name) {
        let text = JSON.stringify(data);
            text = text.replace(/{/g,"");
            text = text.replace(/}/g,"");
            text = text.replace(/:/g,`:,`);
            text = text.replace(/"/g,`'`);
        
        let Newdata = text.split(',');
        let resp=[];
        Newdata.forEach(element => {
            if(!element.includes(":")){resp.push(element);}
        });
        let newtext="";
        resp.forEach(element => {
            newtext+=","+element;
        });
        newtext =  newtext.replace(",","");
        return `${name}(${newtext}).`
    }
    CreatePredicado(data,name)
    {
    let Predicado = "";
    data.forEach(element => {
        let dt =this.Convert(element,name);
        Predicado+=dt;
    });
    return Predicado;
    }
}

