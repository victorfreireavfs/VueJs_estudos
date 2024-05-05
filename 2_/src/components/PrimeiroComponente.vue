<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
        <p>A chave do App é: {{ test }}</p>
    </div>
</template>

<script>
export default {
    name: 'PrimeiroComponente',
    data(){
        return{
            nome: "Victor",
            profissao: "Programador Jr.",
            test: "Teste"           
        }
    },


}
</script>