<template>
<div id="app">
    
    <button v-on:click="toggle">Toggle</button>
    <component v-bind:is="component" />

</div>
</template>

<script>

import Cadastro from './components/Cadastro.vue'
import Listagem from './components/Listagem.vue'

export default {
  name: 'App',
  components: {
    Cadastro,
    Listagem
  },
  data (){
    return {
      component:"Cadastro"
    }
  },
  methods: {
    toggle(){
      if (this.component === Cadastro) {
        this.component = Listagem;
      } else {
        this.component = Cadastro;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
