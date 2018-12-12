<template>
    <div class="BarTool">
        <ul class="Tools">
            <li class="Item" :class="{Bt:(Item.type!='Separdor')}" :key="key" v-for="(Item,key) in Buttons">
                <img v-bind:src="Item.Link">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Buttons:[
                {type:'Mosue',Link:require('../assets/IconTool/Mouse.svg')},
                {type:'Cable',Link:require('../assets/IconTool/Cable.svg')},
                {type:'Separdor',Link:require('../assets/IconTool/Separador.svg')},
                {type:'Play',Link:require('../assets/IconTool/Play.svg')}]
        }
    }    
}
</script>
<style lang="scss" scoped>
.BarTool
{
    background-color: #333333;
    position: relative;
    grid-column: 1;
    grid-row: 1;
    .Tools
    {   
        margin-left: 10px;
        .Item
        {
            list-style: none;
            float: left;
            padding: 5px 10px;
            padding-top: 10px;
            img
            {
                width: 30px;
                height: 30px;
            }
        }
        
        .Bt:hover{background-color: #1a1919;}
    }
}
</style>
