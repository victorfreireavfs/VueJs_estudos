<template>
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>{{ titulo }}</h1>
      <p> {{ texto }}</p>
    </div>
 </template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        titulo: "Hello Word",
        texto: "Aplicação crianda com Vue CLI."
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
