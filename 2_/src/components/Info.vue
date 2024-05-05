<template>
     <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades.</p>
        <p>Utilizo as Seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
        <p v-if="3 > 2">Testando</p>
        <p v-show="mostar_email">Meu email é:  {{ email }}</p>
        <Picture/>
        <p>Para acessar meu portifólio basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a></p>
    </div>
</template>

<script>
import Picture from "./Picture.vue"

export default {
    name: 'Info',
    components: {
        Picture
    },

    data(){
        return{
            esta_trabalhando: false,
            mostar_email: false,
            email:"victoravgs@gmail.com",
            meu_link:"https://github.com/victorfreireavfs/devmedia-estudos"
        }
    }
}
</script>