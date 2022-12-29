const app = Vue.createApp({
    data() {
        return{
            myName:'Baia Maisuradze',
            myAge: 22,
            aged: 27,
            picLink:'https://c.wallhere.com/photos/9e/1b/simple_background_violet_gradient-221703.jpg!d',
        };
    },
    methods:{
        randNumFunc(){
            const randNum = Math.random();
            return randNum;
        }
    },
});

app.mount('#assignment');