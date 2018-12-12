<template>
    <div class="Nav">
        <h1>{{NameApp}}</h1>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            NameApp:"Nombre"
        }
    }
}
</script>
<style lang="scss" scoped>
    .Nav 
    {
        background-color: #1d89ff;
        width: 100%;
        padding: 10px 0;
        grid-column: 1 / span 2;
        
        h1
        {
            text-align: left;
            color:white;
            margin-left: 10px;
        }
    }
</style>
