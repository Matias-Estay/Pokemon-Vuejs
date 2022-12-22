<template>
  <layout-app :h_center="true">
    <template v-slot:default>
      <spinner-load :loading="loading"/>
      <div class="container-fluid" ref="search">
        <div class="row justify-content-center">
          <div class="input-group mb-3">
            <span class="input-group-prepend bg-white border-right-0">
                <span class="input-group-text bg-transparent">
                  <i class="bi-search"></i>
                </span>
            </span>
            <input type="text" class="form-control border-left-0" v-model="search" :placeholder="'Search'"/>
          </div>
        </div>
      </div>
      <div class="container-fluid overflowed" :style="{'max-height':height+'px !important'}">
        <div class="row justify-content-center mt-3" v-if="filter_pokemons_all.length>0">
          <div class="row justify-content-center w-100 "  v-for="(item,index) in fav==false?filter_pokemons_all:filter_pokemons_fav" :key="index">
            <div class="bg-white shadow-sm mb-2 p-2 w-100">
              <div class="row">
                <div class="col-8 col-md-8 pointer align-self-center ps-5" data-bs-toggle="modal" :data-bs-target="'#modal-pokemon-'+item.name" @click="Load_data(item)">
                  {{item.name}}
                </div>
                <div class="modal fade" :id="'modal-pokemon-'+item.name" :aria-labelledby="'modal-pokemon-'+item.name" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div class="container-fluid">
                          <div class="row align-items-center card">
                            <img class="position-relative w-100 h-100 fluid" :style="{top: 0,left: 0}" src="./assets/images/banner.png"  />
                            <div class="col-md-12 h-100 text-center w-100 position-absolute">
                              <img class="rounded-circle h-100 mt-2 fluid" :src="pokemon.sprites!=undefined?pokemon.sprites.front_default:''" />
                            </div>
                            <div class="col-md-12 h-100 w-100 position-absolute text-end">
                              <button class="translucid mt-2" data-bs-dismiss="modal">
                                <i class="bi-x"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="container-fluid">
                          <div class="row align-items-center m-3">
                            <h5>
                              Name: {{item.name}}
                            </h5>
                          </div>
                          <hr/>
                          <div class="row align-items-center m-3">
                            <h5>
                              Weight: {{pokemon.weight}}
                            </h5>
                          </div>
                          <hr/>
                          <div class="row align-items-center m-3">
                            <h5>
                              Height: {{pokemon.height}}
                            </h5>
                          </div>
                          <hr/>
                          <div class="row align-items-center m-3">
                            <h5>
                            Types: {{pokemon.types!=undefined? pokemon.types[0].type.name + (pokemon.types[1]!=undefined?", "+pokemon.types[1].type.name:''):''}}
                            </h5>
                          </div>
                          <hr/>
                          <div class="container-fluid h-100 mb-3">
                            <div class="row justify-content-center align-items-center h-100 p-1" align-h="between">  
                              <div class="col-xl-10  col-lg-10 col-md-10 col-sm-10">
                                <button class="poke-btn" v-clipboard:copy="clipboard" @click="Copy_clipboard(item.name)">
                                  Share with my friends
                                </button>
                                <input type="text" :id="'Clipboard-'+item.name" :value="clipboard" hidden/>
                              </div>
                              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                <button class="favorito shadow-sm btn btn-light" @click="()=>{item.favorite=!item.favorite}">
                                  <i class="bi bi-star-fill" :style="{color:item.favorite==false?'grey':'orange'}"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-md-4">
                  <button class="favorito shadow-sm btn btn-light" @click="()=>{item.favorite=!item.favorite}">
                    <i class="bi bi-star-fill" :style="{color:item.favorite==false?'grey':'orange'}"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3" v-else>
          <div class="col-md-12">
            <div class="container-fluid">
              <div class="row justify-content-center">
                <h4>Uh-Oh!</h4>
              </div>
              <div class="row justify-content-center">
                looks like you lost your way
              </div>
              <div class="row justify-content-center">
                <a class="poke-btn btn" :href="'/'">
                  Go back Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer" ref="footer">
        <div class="container-fluid h-100">
          <div class="row justify-content-center align-items-center h-100">  
            <div class="col-xl-2 col-sm-6 col-6">
              <button :class="fav==false?'poke-btn p-1 w-100':'poke-btn-deactive p-1 w-100'" @click="Cambio_fav">
                <i class="bi bi-list"></i>
                All
              </button>
            </div>
            <div class="col-xl-2 col-sm-6 col-6" align-v="center">
              <button :class="fav==true?'poke-btn p-1 w-100':'poke-btn-deactive p-1 w-100'" @click="Cambio_fav">
                <i class="bi bi-star-fill"></i>
                Favorites
              </button>
            </div>
          </div>
        </div>
      </footer>
    </template>
  </layout-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name:'home-view',
  computed:{
    filter_pokemons_all(){
      var result = this.pokemons.filter(item => {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
      return result
    },
    filter_pokemons_fav(){
      var result = this.pokemons.filter(item => {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1 && 
          item.favorite == true
        );
      });
      return result;
    },
    ...mapGetters('Pokestore',{
      pokemons:'Getpokemons',
      pokemon:'Getpokemon' 
    })
  },
  mounted(){
    this.loading=true;
    this.height=window.innerHeight-this.$refs.footer.clientHeight-this.$refs.search.clientHeight-30;
    this.ActionAll().then(()=>{
      this.loading=false;
    })
    window.addEventListener('resize', ()=>{
      this.height=window.innerHeight-this.$refs.footer.clientHeight-this.$refs.search.clientHeight-30;
    });

  },
  data(){
    return{
      search:'',
      loading:false,
      height:0,
      fav:false,
      clipboard:'',
    }
  },
  methods:{
    ...mapActions('Pokestore',{
      ActionAll:'ActionAll',
      ActionPokemon: 'ActionPokemon'
    }),
    Copy_clipboard: function (name) {
      var copyText = document.getElementById("Clipboard-"+name);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value).then((result)=>{
        console.log(result)
        alert('You just copied the following text to the clipboard: ' + this.clipboard);
      });
    },
    Load_data: function(item){
      this.loading=true;
      this.ActionPokemon(item).then(()=>{
        this.clipboard = String("Name: "+item.name+', Weight: '+this.pokemon.weight+", Height: "+this.pokemon.height+", Types: "+(this.pokemon.types!=undefined? this.pokemon.types[0].type.name + (this.pokemon.types[1]!=undefined?", "+this.pokemon.types[1].type.name:''):''));
        this.loading=false;
      })
      this.$forceUpdate();
    },
    Cambio_fav: function(){
      this.fav=!this.fav;
    },
  }
}
</script>