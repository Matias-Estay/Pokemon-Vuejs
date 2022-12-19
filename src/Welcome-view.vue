<template>
  <layout-app>
    <template v-slot:default>
      <div class="row justify-content-center">
        <img responsive alt="Poke Logo" src="./assets/images/logo_pikachu.png" class="ml-5 fluid " style="width:600px;"/>
      </div>
      <div class="row justify-content-center"> 
        <h3 class="text-center">
          Welcome to the pokédex
        </h3>
      </div>
      <div class="row justify-content-center">
        <p class="text-justify text-center">
          The digital encyclopedia created by Professor Oak is an invaluable tool 
          to Trainers in the Pokémon world.
        </p>
        <p class="text-justify text-center">
          Programado por Matías Ignacio Estay Cubillos.
        </p>
      </div>
      <div class="row justify-content-center">
        <router-link class="poke-btn btn" :to="{ path: '/home' }" :style="{maxWidth:'200px'}">Get Started</router-link>
      </div>
    </template>
  </layout-app>
</template>
<script>
  export default {
    name: 'Index-view',
    compatConfig: { MODE: 3 }
  }
</script>
