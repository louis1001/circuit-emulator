<template>
  <div class="home">
   <Nav></Nav>
   <ListComponet :ActiveBt="PermitClick" @Click="ClickComponet"></ListComponet>
   <div class="Grup3">
      <BarTool></BarTool>
      <WorkTable @Click="WorkTableClick"></WorkTable>
      <Console></Console>
      <Property></Property>
   </div>
   
  </div>
</template>
<script>
import Nav from '../components/Nav';
import ListComponet from '../components/ListComponet';
import WorkTable from '../components/WorkTable';
import BarTool from '../components/BarTool'
import Console from '../components/Console' 
import Property from '../components/Property';

export default {
  name: 'home',
  components: {
    Nav,
    ListComponet,
    WorkTable,
    BarTool,
    Console,
    Property,
  },
  data(){return{PermitClick:false,Componente:''}},
  methods:{
    WorkTableClick(e)
    {
      this.PermitClick=true;
      this.Componente='';   
    },
    ClickComponet(e)
    {
      this.PermitClick=false;
      this.Componente=e;
    }
  }
}
</script>
<style lang="scss" scoped>
  .home
  {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    overflow: hidden;

    .Grup3
    {
        grid-column: 2;
        grid-row: 2;
        position:absolute;
        width: 100%;
        height: 100%;
        display: inline-grid;
        grid-template-columns: 1fr 270px;
        grid-template-rows: 50px 1fr 150px;
    }
  }
</style>
