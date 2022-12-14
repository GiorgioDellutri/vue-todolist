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
                        text:'Take money $',
                        done: false 
                    },
                ],
                strikeThrough: false
        }
    },

    methods: {
        removeItem(itemToRemove){
            itemIndex = (this.todo.indexOf(itemToRemove))
            if (itemIndex > -1){
                this.todo.splice(itemIndex, 1)
            }
        },
        addNewItem(inputUser){
            this.todo.push({
                text:inputUser,
                done: false 
            })
        }
    }
}).mount('#app')

