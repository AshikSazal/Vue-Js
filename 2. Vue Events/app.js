const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:"",
      lastName:"",
      lastName2:"",
      confirmedName:"",
      resetName:"",
      outputFullName:"",
      outputFullName2:""
    };
  },
  computed:{
    fullName(){
      if(this.outputFullName===""){
        return "";
      }
      return this.outputFullName+" "+"Rahman";
    }
  },
  // Watcher is not a good way to use when there is dependency
  watch:{
    // This is good to use watcher
    counter(value){
      if(value>50){
        const that = this;
        setTimeout(function(){
          that.counter=0;
        },2000)
      }
    },
    // In data section if outputFullName is changed then below function will be re executed because of same name
    outputFullName(value){
      this.outputFullName2 = value + " " + "Rahman"
    }
  },
  methods:{
    outputFullInput(){
      // It will executed for method call also which is not good
      console.log("running")
      if(this.outputFullName===""){
        return "";
      }
      return this.outputFullName+" "+"RAhman";
    },
    add(){
      this.counter++;
    },
    increasedBy(num){
      this.counter+=num;
    },
    setName(event){
      this.name = event.target.value;
    },
    setName2(event, lastName){
      this.lastName = event.target.value+" "+lastName;
    },
    setName3(event, lastName){
      this.lastName2 = event.target.value+" "+lastName;
    },
    resetInputName(event){
      this.resetName = event.target.value;
    },
    submitForm(){
      alert("Hello");
    },
    confirmedInput(){
      this.confirmedName=this.lastName2;
    },
    resetInput(event){
      this.resetName="";
    }
  }
});

app.mount('#events');
