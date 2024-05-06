<template>
     <div>
        <p> {{ email }}</p>

        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades.</p>
        
        <p>Utilizo as Seguintes tecnologias para back-end</p>
        <ul>
            <li v-for="(tecnologia, index) in backendTech" v-bind:key="index">
                {{ tecnologia }}
            </li>
        </ul>
        
        <p>Utilizo as Seguintes tecnologias para front-end</p>
        <ul>
            <li v-for="tecfront in frontendTech" :key="tecfront.id">
                {{ tecfront.linguagem }}
            </li>
        </ul>
        
        <p v-if="3 > 2" class="paragrafo_pai">Testando</p>
        
        <div>
            <button @click="showEmail">{{ texto_botao }}</button>
        </div>
       
        <p v-show="mostrar_email">Meu email é:  {{ email }}</p>
       
        <Logo/>
        
        <p class="teste">Para acessar meu portifólio basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a></p>
    </div>
</template>

<script>
import Logo from "./Picture.vue"

export default {
    name: 'Info',
    components: {
        Logo
    },

    props: {
            email: String,
            esta_trabalhando: Boolean
    },
    
    data(){
        return{
            mostar_email: false,
            meu_link:"https://github.com/victorfreireavfs/devmedia-estudos",
            texto_botao:"Mostrar email.",
            // array
            backendTech: ['JavaScript','PHP','Python'],
            // objeto
            frontendTech: [
                {id: 1, linguagem:'HTML'},
                {id: 2, linguagem:'CSS'},
                {id: 3, linguagem: 'VUE'}
            ]
        }      
    },
    
    methods:{
    showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.texto_botao='Mostrar email.'
            } else{
                this.texto_botao = 'Ocultar email.'
            }
        }
    }
}
</script>

<style>
    .paragrafo_pai{
        color:rgb(0, 17, 255);
        font-weight: bold;
    }
</style>