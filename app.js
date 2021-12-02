const app = Vue.createApp({
    data() {
        return {
            name: "Daniel",
            age: 38,
            link: "https://www.google.com/logos/doodles/2021/georges-seurats-162nd-birthday-6041111272357888.2-law.gif"

        }
    },
    methods: {
        calcAge() {
            return this.age + 5;
        },

        randomNum(){
            const n = Math.random()
            return (n)
        },


    }

});

app.mount('#assignment');
