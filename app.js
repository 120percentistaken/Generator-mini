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
        methods: {
           async getUser() {
               //get a random user data every time you click
               const res = await fetch('https://randomuser.me/api')
               //results array, user by default
               const {results} = await res.json()
               
                this.firstName = results[0].name.first
                this.lastName = results[0].name.last
                this.gender = results[0].gender
                this.email = results[0].email
                this.picture = results[0].picture.large
            }, 
        },
})

app.mount('#app')