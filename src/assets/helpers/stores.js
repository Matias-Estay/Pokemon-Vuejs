import Vuex from 'vuex';
import {Pokestore} from './Pokestore.module';

export const stores = new Vuex.Store({
    modules: {
        Pokestore
    },
});