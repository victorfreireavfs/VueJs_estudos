<template>
    <div>
        <h2>Esta é a descrição da pessoa:{{ nome }} </h2>
        <Info :email= "email" :esta_trabalhando="false"/>
        <Form/>
        
    </div>
</template>

<script>
import Info from './Info'
import Form from './Form'

export default {
    name:"Pessoa",
    components: {
        Info,
        Form
    },
    data(){
        return{
            nome: 'Victor',
            email:'victoravfs24@gmail.com'
        }       
    }

}
</script>