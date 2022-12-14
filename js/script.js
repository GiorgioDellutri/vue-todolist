const {createApp} = Vue; 

createApp({
    data() {
        return{
            todo : [
                    {
                        text:'Create website',
                        done: true
                    }, 
                    {
                        text:'Sponsor page',
                        done: false
                    },
                    {
                        text:'Create logos',
                        done: true
                    },
                    {
                        text:'Buy domain',
                        done: true 
                    },
                    {
                        text:'Take money $',
                        done: false 
                    },
                ],
                strikeThrough:'strike-through ',
                strikeThrough : false
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
            this.clearUserInput();
            this.todo.push({
                text:inputUser,
                done: false 
            })
        },
        clearUserInput(){
            this.newTodoItem= '';
        },
        clickDone(todo){
            todo.done = !todo.done
        }
    }
}).mount('#app')

