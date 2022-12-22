import axios from 'axios' 
const url = "https://pokeapi.co/api/v2"

const state = {
    pokemons: [],
    pokemon:[],
}

const mutations = {
    Setpokemons(state, pokemons) {
        state.pokemons=pokemons
    },
    Setpokemon(state, pokemon) {
        state.pokemon=pokemon
    }
}

const actions = {
    async ActionAll({commit}){
        var pokemons = []
        axios.get(url+'/pokemon?offset=0&limit=1118',{}).then((result)=>{
            for(var i =0;i<result.data.results.length;i++){
                result.data.results[i].name=result.data.results[i].name.charAt(0).toUpperCase() + result.data.results[i].name.slice(1)
                pokemons.push({name:result.data.results[i].name,url:result.data.results[i].url,favorite:false})
            }
            commit('Setpokemons',pokemons);
        });
    },
    async ActionPokemon({commit},item){
        var pokemon = []
        await axios.get(item.url,{}).then((result)=>{
            pokemon = result.data;
            commit('Setpokemon',pokemon);
        })
    }
}

const getters= {
    Getpokemons:state=>{
        return state.pokemons;
    },
    Getpokemon:state=>{
        return state.pokemon;
    }
}


export const Pokestore ={
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}