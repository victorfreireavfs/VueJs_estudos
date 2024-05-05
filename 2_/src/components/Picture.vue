<template>
    <img :src="avatar" :alt="descricao" :title="title">
</template>

<script>
export default {
    name: 'Picture',
    data(){
        return{
            avatar:"/img/avatar.png",
            descricao: "Victor Freire",
            title: "minha foto usuário"
        }
    }
}
</script>