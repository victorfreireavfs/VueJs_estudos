<template>
    <div>
        <img :src="avatar" :alt="descricao" :title="title">
        <Reutilizacao/>
     </div>
</template>

<script>
import Reutilizacao from './Reutilizacao.vue';

export default {
    name: 'Logo',
    components: {
        Reutilizacao
    },        
    data(){
        return{
            avatar:"/img/avatar.png",
            descricao: "Victor Freire",
            title: "minha foto usuário"
        }
    }
}
</script>