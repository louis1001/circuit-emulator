<template>
  <div>
    <div class="Charge" v-if="Charge"></div>
  <div class="home">
   <Nav></Nav>
   <ListComponet :ActiveBt="PermitClick" @Click="ClickComponet" @load="e=>{this.ListComp=e}"></ListComponet>
   <div class="Grup3">
      <BarTool @Play="ClikPlay" :play="play"></BarTool>
      <WorkTable @Charge="e=>this.Charge=e" @Click="WorkTableClick" :Componente="Componente" :ListComp="ListComp"></WorkTable>
      <Console :play="play" @ClosedTest="ClikPlay"></Console>
      <Property></Property>
   </div>
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
  data(){return{PermitClick:false,Componente:'',play:false,ListComp:[],Charge:true}},
  methods:{
    ClikPlay(e)
    {
      this.play=e;
      console.log(e);
      
    },
    WorkTableClick()
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
  .Charge
  {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #1d89ff;
    z-index: 10;

  }
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
