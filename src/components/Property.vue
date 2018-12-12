<template>
    <div class="Property">
        <h1>Propiedades</h1>
        <div v-if="componente!==null" class="Form" :key="key" v-for="(item,key) in Object.keys(componente)">
             <label :for="item">{{item.replace(/_/g,' ')}}: </label>
             <input  :name="item" type="text" v-model="componente[item]">
        </div>  
    </div>    
</template>
<script>
export default {
    props:{
         componente:{
             type:Object,
              default:function(){return {Name:'s',Voltage_max:undefined,Resistenca:undefined,Intencidad:undefined,Capacitacia:undefined}}
             }
    }
}
</script>
<style lang="scss" scoped>
    .Property
    {
        grid-column: 2;
        grid-row: 1;
        position:absolute;
        width: 100%;
        height: 100%;
        background-color: #ececec;
        h1 
        {
            position: relative;
            color: rgb(255, 255, 255);
            padding: 10px 0;
            font-size: 24px;
            background-color: #222222;
            width: 100%;
            margin-bottom: 20px;

        }
        .Form
        {
            padding: 0 10px;
            label
            {
                display: block;
                font-weight: bold;
                text-align: left;
            }
            input
            {
                padding: 2px;
                margin: 5px 0;
            }
        }
    }
</style>
