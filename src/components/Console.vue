<template>
    <div class="Console">
        <h1>Consola</h1>
        <div class="Content">
            <div class="Info">
                <p :class="{'Error':item.Error}" :key="key" v-for="(item,key) in Notificaciones">- {{item.Info}}</p>
            </div>         
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Notificaciones:[],
        }
    },
    methods:{
        ClosedTest()
        {
            if (!this.Notificaciones[this.Notificaciones.length-1].Error) {
                this.Notificaciones.push({Info:'Prueba Finalizada .....',Error:false});
            }
            this.$emit('ClosedTest',false);
        }
    },
    watch:{
        Notificaciones:(e)=>
        {
            let Cont = document.querySelector('.Content');
            let Info = document.querySelector('.Info');
            setTimeout(() => {
                 Cont.scrollTop = Info.offsetHeight;
            }, 50);
           
        },
        play:function(e)
        {
            if (e) {
              let Inicio = [{Info:'Inciando..',Error:false},{Info:'CreadoMatriz..',Error:false}]
            Inicio.forEach((element,key) => {
                setTimeout(()=>{
                  this.Notificaciones.push(element);           
                    if (key==1) {
                         this.ClosedTest();   
                    }
                }, 1000);
            });   
           
            }
        }
    },
    props:{
        play:{type:Boolean,default:false}
    }
}
</script>
<style lang="scss" scoped>
.Console
{
    position: relative;
    grid-column: 1;
    grid-row: 3;
    width: 100%;
    height:100%;
    h1
    {
        color:rgb(255, 255, 255);
        padding: 10px 0;
        font-size: 24px;
        background-color: #222222;
        text-align: left;
        padding-left: 10px;
    }
    .Content
    {
       position:absolute;
       width: 100%;
       height: 100%;
       overflow: auto;
    }
    .Info
    {
        padding-bottom: 10%;
    }
    p
    {
        text-align: left;
        color:  #1d89ff;
        margin-left: 10px;
    }
    .Error
    {
         color:#c7314b;
    }

}
</style>
