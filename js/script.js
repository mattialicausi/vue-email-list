'use strict';

const {createApp} = Vue;

//creo app
const app = createApp({
    data(){
        return {
            listaEmail: [],
        }
    },
    methods: {
        //metodo per generare email random tramite API
        callApi(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=>{
                    console.log(email.data.response);
                    this.listaEmail.push(email.data.response);
                })
                
            }
        }
    },
    computed(){
        //computed
    },
    mounted(){
       //mounted
    },

});
app.mount('#app');