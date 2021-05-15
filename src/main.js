import Vue from 'vue'
import jQuery from "jquery";
import Clipboard from 'v-clipboard'
import {router} from './helpers/router.js';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.jQuery = window.$ = jQuery
Vue.use(BootstrapVue);
Vue.use(Clipboard)
Vue.use(BootstrapVueIcons);
Vue.component('loader',require('./components/loader/Spinner.vue').default);
Vue.component('layout',require('./components/layout/Layout.vue').default);
require('./css/poke-style.css');
require('jquery');
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
})
