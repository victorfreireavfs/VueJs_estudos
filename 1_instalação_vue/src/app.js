const MeuNome = {
    data() {
        return{
            nome: "Victor Freire",
            idade: 30
        }
    }
}

// mount = montar
//  mount( ligação com o DOM usando #id )
Vue.createApp(MeuNome).mount("#app");

