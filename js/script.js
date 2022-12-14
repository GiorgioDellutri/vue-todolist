const {createApp} = Vue; 

createApp({
    data() {
        return{
            todo : [
                    {
                        text:'Creare sito web',
                        done: false
                    }, 
                    {
                        text:'Sponsorizzare pagina',
                        done: false
                    },
                    {
                        text:'Creare logo',
                        done: true
                    },
                    {
                        text:'Comprare dominio',
                        done: true 
                    },
                    {
                        text:'Farsi pagare $',
                        done: false 
                    },
                ],
        }
    },

    methods: {
    }
}).mount('#app')

