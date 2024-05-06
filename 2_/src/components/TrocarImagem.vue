<template>
    <div>
        <button @click="$emit('trocarImagem')"> Trocar imagem do perfil</button>
    </div>
</template>

<script>
export default {
    name: 'TrocarImagem',
    emits: ['trocarImagem']
}
</script>