<template>
  <div>
    <Header :esta_logado="true"/>
    <PrimeiroComponente/>
    <p class="paragrafo-pai"></p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  
  export default{
    name: "App",
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header
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
