<template>
    <div>
        <img :src="avatar" :alt="descricao" :title="title">
        <TrocarImagem @trocar-imagem="trocarImagem"/>
     </div>
</template>

<script>
import Reutilizacao from './Reutilizacao.vue';
import TrocarImagem from './TrocarImagem.vue'

export default {
    name: 'Logo',
    components: {
        Reutilizacao,
        TrocarImagem
    },        
    data(){
        return{
            avatar:"/img/avatar.png",
            descricao: "Victor Freire",
            title: "minha foto usuário"
        }
    },

    methods: {
        trocarImagem(){
            this.avatar = "/img/avatar2.png" 

        }
    }
}
</script>