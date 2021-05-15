# pokémon
Pequeña app diseñada por Matías Ignacio Estay Cubillos en Vue.js. Utiliza librerías de bootstrap, axios, vueclipboard y jquery. Esto utiliza como back end la API https://pokeapi.co/.

Pagina Home está con sobrecarga de información, ya que posee 1188 registros cargados, si se desea cargar de manera más agil, se debe modificar en el Home.vue mounted() en la petición https://pokeapi.co/api/v2/pokemon?offset=0&limit=X (sustituir X por un número) a una cantidad más prudente o generar un indice con máximo de elementos renderizados en la vista.

https://www.linkedin.com/in/mat%C3%ADas-ignacio-estay-cubillos-30295217a/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
