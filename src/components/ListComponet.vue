<template>
  <div class="ListComponet">
    <h1>Componentes</h1>
    <div class="ContentList">
      <ul class="ListComp">
        <li
          class="Item"
          :class="{'Press':item.Click==1,'Oter':item.Click==0,'False':item.Click==2}"
          :key="key"
          v-for="(item,key) in Componetes"
          @click="Click(item,key)"
        >
          <img v-bind:src="item.link">
          <h2>{{item.Name}}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Componetes: [
        {
          Name: "Cable",
          link: require("../assets/IconComp/Cable.svg"),
          Click: 0
        },
        {
          Name: "Bateria",
          link: require("../assets/IconComp/Bateria.svg"),
          Click: 0
        },
        {
          Name: "Bobina",
          link: require("../assets/IconComp/Bobina.svg"),
          Click: 0
        },
        {
          Name: "Condensador",
          link: require("../assets/IconComp/Condensador.svg"),
          Click: 0
        },
        {
          Name: "Diac",
          link: require("../assets/IconComp/Diac.svg"),
          Click: 0
        },
        {
          Name: "Diodo",
          link: require("../assets/IconComp/Diodo.svg"),
          Click: 0
        },
        {
          Name: "Fusible",
          link: require("../assets/IconComp/Fusible.svg"),
          Click: 0
        },
        {
          Name: "Interructor",
          link: require("../assets/IconComp/Interructor.svg"),
          Click: 0
        },
        { Name: "LED", link: require("../assets/IconComp/LED.svg"), Click: 0 },
        {
          Name: "Potenciometro",
          link: require("../assets/IconComp/Potenciometro.svg"),
          Click: 0
        },
        {
          Name: "Rele",
          link: require("../assets/IconComp/Rele.svg"),
          Click: 0
        },
        {
          Name: "Resistencia",
          link: require("../assets/IconComp/Resistencia.svg"),
          Click: 0
        },
        {
          Name: "Transistor",
          link: require("../assets/IconComp/Transistor.svg"),
          Click: 0
        }
      ]
    };
  },
  methods: {
    Click(info, key) {
      if (info.Click == 0) {
        this.Componetes.forEach((element, Cont) => {
          element.Click = 2;
          this.$set(this.Componetes, Cont, element);
        });
        info.Click = true;
        this.$set(this.Componetes, key, info);
        this.$emit('Click',info.Name);
      }
    }
  },
  watch:{
    ActiveBt:function(val){
      if (val) {
          this.Componetes.forEach((element, Cont) => {
          element.Click = 0;
          this.$set(this.Componetes, Cont, element);
        });
      }
  }},
  props:{ActiveBt:{type:Boolean,default:false}},
  beforeMount() {
    let NameComponente = [];
   this.Componetes.forEach(element => {
      NameComponente.push(element.Name)
    });
    this.$emit('load',NameComponente);}
};
</script>
<style lang="scss" scoped>
.ListComponet {
  grid-column: 1;
  grid-row: 2;
  width: 282px;
  height: 100%;
  background-color: #ececec;
  h1 {
    color: rgb(255, 255, 255);
    padding: 10px 0;
    font-size: 24px;
    background-color: #222222;
  }
  .ContentList {
    position: absolute;
    height: 100%;
    overflow: scroll;
    .ListComp {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
      margin: 10px;
      padding-bottom: 100px;
      .Item {
        list-style: none;
        background-color: #d4d4d4;
        width: 100px;
        height: 100px;
        padding: 10px;

        img {
          width: 80px;
          height: 80px;
        }

        h2 {
          font-size: 14px;
        }
      }
      .Oter:hover {
        background-color: #353535;
        h2 {
          color: white;
        }
      }
      .Press {
        background-color: #1d89ff;
      }
      .False {
        filter: grayscale(100%);
      }
    }
  }
}
</style>
