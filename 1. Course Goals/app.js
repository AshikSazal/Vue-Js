const app = Vue.createApp({
    data (){
        // It will return only object
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "<i>Master Vue and build amazing apps</i>",
            vueLink: 'https://vuejs.org/'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

// It will select the id who I want to work
app.mount("#user-goal");
