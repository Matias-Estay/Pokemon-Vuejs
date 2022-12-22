import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/poke-style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './assets/helpers/router.js'
import Index from './Index-view.vue'
import LayoutApp from './components/layout-app'
import Spinner from './components/spinner-load'
import {createApp} from 'vue';
import {stores} from './assets/helpers/stores'
const app = createApp(Index)
app.component('layout-app',LayoutApp)
app.component('spinner-load', Spinner)
app.use(stores)
app.use(router)
app.mount('#app')
