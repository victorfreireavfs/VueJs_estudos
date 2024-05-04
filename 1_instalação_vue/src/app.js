const MeuNome = {
    data() {
        return{
            idade:"",
            nome: "",
            input_idade: "",
            input_name: "",
        }
    },


    // v-on:click  = nome do submit
    // (e) = transforma em elemento  
    methods:{
        // pega o nome do click e resgata o evento
        submitForm(e){
            // ação para esse evento: preventDefault(não deixa o form ser enviado pro serv)
            e.preventDefault();
            
            // this = faz referência ao dado especifico
            console.log(this.input_name);
            console.log(this.input_idade);

            this.nome = this.input_name;
            this.idade = this.input_idade;
        }

    }
}

// mount = montar
//  mount( ligação com o DOM usando #id )
Vue.createApp(MeuNome).mount("#app");

