const app = Vue.createApp({
        //sample! template : '<h1> Hello {{firstName}} </h1>',
        data(){
            return{
                firstName:'120percentistaken',
                lastName:':]',
                gender:'male',
                email:'something123@email.com',
                picture:'https://randomuser.me/api/portraits/men/10.jpg',
            }
        },
})

app.mount('#app')