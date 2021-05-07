var app = new Vue({

  el: '#app',
  
  data: { 

    alertActive: false,

    impegno: "",

    listaCose: [

      {
        todo: "Mangiare una torta fatta di fango e odiooooo",
        checked: true,
      },
      
      {
        todo: "Alzarsi presto alla mattina per ripassare",
        checked: false,
      },

      {
        todo: "Fingere di comprendere",
        checked: false,
      },

      {
        todo: "Fare una corsetta post torta",
        checked: false,
      },
      
    ],
    

  },
  

  methods: {

    rimuoviImpegno(index){
      this.listaCose.splice(index,1);
    },

    aggiungiImpegno(){
      if(this.impegno.length > 2){
        this.listaCose.push(
          {
            todo: this.impegno, checked:false
          }
        ),
        this.impegno= ""; 
      }else{
        this.alertActive = true;
        setTimeout(()=>{
          this.alertActive = false;
        }, 2000)
      }
    },

  }






});
