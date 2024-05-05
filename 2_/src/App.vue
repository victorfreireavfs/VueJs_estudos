<template>
  <div>
    <PrimeiroComponente/>
    <p class="paragrafo-pai"></p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  
  export default{
    name: "App",
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    }
  }
</script>

<style>
  body{
    background-color: brown;
    color: whitesmoke
  }

  a{
    color: green;
    background-color: white; 
    padding:0.5rem;
    border-radius: 2rem;
    text-decoration:none;
  }

  .teste{
    background-color:black;
  }
</style>
