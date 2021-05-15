<template>
  <layout :h_center="true">
    <template v-slot:default>
      <loader :cargando="cargando"/>
      <b-container fluid>
        <b-row class="justify-content-center">
          <b-input-group>
            <template #prepend>
              <span class="input-group-prepend bg-white border-right-0">
                  <span class="input-group-text bg-transparent">
                    <b-icon-search color="grey"/>
                  </span>
              </span>
            </template>
            <b-form-input v-model="busqueda" :placeholder="'Search'" class="border-left-0"/>
          </b-input-group>
        </b-row>
        <b-row class="justify-content-center mt-3" v-if="filtro_pokemones_todos.length>0">
          <b-row class="w-100 justify-content-center"  v-for="(item,index) in fav==false?filtro_pokemones_todos:filtro_pokemones_favoritos" :key="index">
            <div class="bg-white shadow-sm mb-2 p-2 w-100">
              <b-row>
                <b-col cols="8" class="pointer" style="align-self:center;" @click="Cargar_datos(item)">
                  {{item.name}}
                </b-col>
                <b-modal :id="'modal-pokemon-'+item.name" size="lg" title="BootstrapVue" style="z-index:299 !important;">
                  <b-container fluid>
                    <b-row class="align-items-center card">
                      <b-img class="position-relative w-100 h-100" :style="{top: 0,left: 0}" :src="'/assets/banner.png'" fluid/>
                      <b-col align-self="center" class="h-100 w-100 position-absolute" align-v="center" :style="{'text-align':'center'}">
                        <b-img class="rounded-circle h-100 mt-2" :src="pokemon.sprites!=undefined?pokemon.sprites.front_default:''" fluid/>
                      </b-col>
                      <b-col align-self="end" class="h-100 w-100 position-absolute" align-v="top" :style="{'text-align':'right'}">
                        <button class="translucid mt-2" @click="$bvModal.hide('modal-pokemon-'+item.name)">
                          <b-icon icon="x"/>
                        </button>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-container fluid>
                    <b-row class="align-items-center m-3">
                      <h5>
                        Name: {{item.name}}
                      </h5>
                    </b-row>
                    <hr/>
                    <b-row class="align-items-center m-3">
                      <h5>
                        Weight: {{pokemon.weight}}
                      </h5>
                    </b-row>
                    <hr/>
                    <b-row class="align-items-center m-3">
                      <h5>
                        Height: {{pokemon.height}}
                      </h5>
                    </b-row>
                    <hr/>
                    <b-row class="align-items-center m-3">
                      <h5>
                      Types: {{pokemon.types!=undefined? pokemon.types[0].type.name + (pokemon.types[1]!=undefined?", "+pokemon.types[1].type.name:''):''}}
                      </h5>
                    </b-row>
                    <hr/>
                    <b-container fluid class="h-100">
                      <b-row class="justify-content-center align-items-center h-100 p-1" align-h="between">  
                        <b-col class="col-xl-10  col-lg-10 col-md-10 col-sm-10" align-v="center">
                          <button class="poke-btn" v-clipboard:copy="clipboard" @click="Copy_clipboard">
                            Share with my friends
                          </button>
                        </b-col>
                        <b-button class="favorito shadow-sm" variant="light" @click="()=>{item.favorite=!item.favorite}">
                          <b-icon icon="star-fill" :color="item.favorite==false?'grey':'orange'"/>
                        </b-button>
                      </b-row>
                    </b-container>
                  </b-container>
                </b-modal>
                <b-col cols="4">
                  <b-button class="favorito shadow-sm" variant="light" @click="()=>{item.favorite=!item.favorite}">
                      <b-icon icon="star-fill" :color="item.favorite==false?'grey':'orange'"/>
                  </b-button>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </b-row>
        <b-row class="justify-content-center mt-3" v-else>
          <b-col cols="12">
            <b-container fluid>
              <b-row class="justify-content-center">
                <h4>Uh-Oh!</h4>
              </b-row>
              <b-row class="justify-content-center">
                looks like you lost your way
              </b-row>
              <b-row class="justify-content-center">
                <a class="poke-btn btn" :href="'/'">
                  Go back Home
                </a>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <footer class="footer">
        <b-container fluid class="h-100">
          <b-row class="justify-content-center align-items-center h-100">  
            <b-col class="col-xl-2 col-sm-6" align-v="center">
              <button :class="fav==false?'poke-btn p-1 w-100':'poke-btn-deactive p-1 w-100'" @click="Cambio_fav">
                <b-icon icon="list-ul"/>
                All
              </button>
            </b-col>
            <b-col class="col-xl-2 col-sm-6" align-v="center">
              <button :class="fav==true?'poke-btn p-1 w-100':'poke-btn-deactive p-1 w-100'" @click="Cambio_fav">
                <b-icon icon="star-fill"/>
                Favorites
              </button>
            </b-col>
          </b-row>
        </b-container>
      </footer>
    </template>
  </layout>
</template>

<script>
import axios from 'axios';
export default {
  name:'Inicio',
  computed:{
    filtro_pokemones_todos(){
      var resultado = this.pokemones.filter(item => {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.busqueda.toLowerCase()) > -1
        );
      });
      return resultado;
    },
    filtro_pokemones_favoritos(){
      var resultado = this.pokemones.filter(item => {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.busqueda.toLowerCase()) > -1 && 
          item.favorite == true
        );
      });
      return resultado;
    }
  },
  mounted(){
    this.cargando=true;
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118',{}).then((resultado)=>{
      console.log(resultado.data.results.length);
      for(var i =0;i<resultado.data.results.length;i++){
        resultado.data.results[i].name=resultado.data.results[i].name.charAt(0).toUpperCase() + resultado.data.results[i].name.slice(1)
        this.pokemones.push({name:resultado.data.results[i].name,url:resultado.data.results[i].url,favorite:false});
      }
      this.cargando=false;
    });
  },
  data(){
    return{
      busqueda:'',
      cargando:false,
      fav:false,
      pokemones:[],
      pokemon:[],
      clipboard:'',
    }
  },
  methods:{
    Copy_clipboard: function () {
      alert('You just copied the following text to the clipboard: ' + this.clipboard);
      this.$clipboard(this.clipboard)
    },
    Cargar_datos: function(item){
      this.cargando=true;
      axios.get(item.url,{}).then((resultado)=>{
        this.pokemon = resultado.data;
        this.clipboard = String("Name: "+item.name+', Weight: '+this.pokemon.weight+", Height: "+this.pokemon.height+", Types: "+(this.pokemon.types!=undefined? this.pokemon.types[0].type.name + (this.pokemon.types[1]!=undefined?", "+this.pokemon.types[1].type.name:''):''));
        this.cargando=false;
        this.$bvModal.show('modal-pokemon-'+item.name);
      });
      this.$forceUpdate();
    },
    Cambio_fav: function(){
      this.fav=!this.fav;
    },
  }
}
</script>
<style scope>
.modal{
  z-index:100 !important;
  background: none;

}
.modal-backdrop{
  z-index: 99 !important;
  background: none !important;
}
.modal-footer{
  display: none !important;
}
.modal-header{
  display: none !important;
}
.modal-body{
  padding:0  !important;
}
</style>