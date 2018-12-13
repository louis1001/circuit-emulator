<template>
    <div class="WorkTable">
        <h1>Mesa de trabajo</h1>
        <div class="Table" @click="Click">
            <VueP5 class="P5" v-on="{setup,draw}"></VueP5>
        </div>
    </div>
</template>
<script>
import VueP5 from 'vue-p5';
//import ProtoBoard from '../assets/Canvas/ProtoBoard.js';
import ListProtoBoard from '../assets/Canvas/ListProtoBoard.js';
import {setupIconComp} from '../assets/Canvas/CompElectronicos/Component.js'

import {addComponent} from '../assets/Canvas/CompElectronicos/Component'
import Resistencia from '../assets/Canvas/CompElectronicos/Resistencia'

addComponent('Resistencia', Resistencia)

// import BdProlog from '../../Datos/PrologDc.js';
export default {
    data(){
        return{
            LisProtoBoard:{},
            ContadorClick:0,
            click:true,
            ListPuntClick:[],
            sketch:{},
        }
    },
    methods:{
        Click()
        {
            this.$emit('Click');
            this.LisProtoBoard.Click()
            //console.log(this.LisProtoBoard.ListProtoBoard);


        },
        setup(sketch)
        {
            sketch.createCanvas(1200, 1000);
            this.LisProtoBoard = new ListProtoBoard(sketch,2,100);
            this.LisProtoBoard.Create();
            setupIconComp(sketch,this.ListComp);
            this.$emit('Charge',false);
            // let Circuito = {Component:[{name:'P1',type:'Pila',Emisor:{Proto:'Negative1',x:0,y:0},Receptor:{Proto:'Positive1',x:1,y:0}},
            //                            {name:'Rt1',type:'Resistor',Emisor:{Proto:'Norma2',x:10,y:2},Receptor:{Proto:'Norma2',x:15,y:2}},
            //                            {name:'Rt2',type:'Resistor',Emisor:{Proto:'Norma1',x:10,y:2},Receptor:{Proto:'Norma1',x:15,y:2}},
            //                            {name:'Rt2',type:'Resistor',Emisor:{Proto:'Norma1',x:20,y:2},Receptor:{Proto:'Norma1',x:25,y:2}},
            //                            {name:'Ld1',type:'LED',Emisor:{Proto:'Norma2',x:15,y:3},Receptor:{Proto:'Norma1',x:16,y:3}},
            //                            {name:'Ld1',type:'LED',Emisor:{Proto:'Norma1',x:15,y:3},Receptor:{Proto:'Norma1',x:16,y:3}},
            //                            {name:'Ld2',type:'LED',Emisor:{Proto:'Norma2',x:25,y:3},Receptor:{Proto:'Norma2',x:26,y:3}}],
            //                 Cable:[{Emisor:{Proto:'Positive1',x:5,y:0},Receptor:{Proto:'Norma2',x:10,y:0}},
            //                        {Emisor:{Proto:'Norma2',x:16,y:1},Receptor:{Proto:'Negative1',x:5,y:0}},
            //                        {Emisor:{Proto:'Positive1',x:10,y:0},Receptor:{Proto:'Norma1',x:10,y:0}},
            //                        {Emisor:{Proto:'Norma1',x:16,y:0},Receptor:{Proto:'Norma1',x:20,y:0}},
            //                        {Emisor:{Proto:'Norma1',x:26,y:3},Receptor:{Proto:'Negative1',x:10,y:0}}]};

            // let BCprolog = new BdProlog(Circuito);
            // BCprolog.Create((err,query)=>{
            //     query.Consult(`paralelo('Rt1',E).`,(err,value)=>{
            //         console.log(value);
            //     });
            // });

           // console.log(BCprolog.GetPredicado());

            //let BdTau = new BdProlog();
           /* let BConocimento = TauProlog.create();
            BConocimento.consult("prueba(12,2,'Pedo').");
            BConocimento.query("prueba(12,Y,Z).");
            let call =function( answer ) { console.log( pl.format_answer( answer ) ); };
            BConocimento.answer(call);*/

        },
        draw(sketch)
        {
            sketch.background(206)
            const elMouse = sketch.createVector(sketch.mouseX, sketch.mouseY)
            this.LisProtoBoard.Hover(elMouse);
            this.LisProtoBoard.Render()
            // SelectNodo es:
           // Datos del Nodo <Position(Localizacion en el Canvas),Size> y su relacion con
           // la ProtoBoard <Name,Type,Position(Localizacion del Nodo en la matriz)>
           // Estructura {Position:{x:0,y:0},Size:0,ProtoBoard:{Name:string,Type:string,Position:{x:0,y:0}}}
            //let SelectNodo = this.LisProtoBoard.SelectNodo;
        }
    },
    components: {
        VueP5
    },
    props:{
        Componente:{type:String,default:''},
        ListComp:{type:Array,default:function(){return[]}}
    },
    watch:{
        Componente:function(val)
        {
            if(val){
                this.LisProtoBoard.ActualizarComponenteSeleccionado("Resistencia")
            }else{
                this.LisProtoBoard.ActualizarComponenteSeleccionado('')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .WorkTable
    {
        position: relative;
        grid-column: 1;
        grid-row: 2;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto 1fr;
        h1
        {
            color:rgb(255, 255, 255);
            padding: 10px 0;
            font-size: 24px;
            background-color: #222222;
            text-align: left;
            padding-left: 10px;
        }
        .Table
        {
            position: relative;
            overflow:auto;
            width: 100%;
            height: 100%;
            .P5
            {
                position:absolute;
                background-color: #cecece;
                overflow: auto;
            }
        }
    }
</style>
