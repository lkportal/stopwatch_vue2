const vm = new Vue({
    el:'#app',
    data:{
        segundo: 0,
        segundoParte1:0,
        minuto:0,
        minutoParte1:0,
        horas:0,
        horasParte1:0,
        tempo:60,
        timeSeg:null,
        elements:'',
        intervalo:false
    },
    methods:{
         time(){
            if(!this.intervalo){
           this.timeSeg = setInterval(()=>{
            this.intervalo = true
               
            if(this.tempo > this.segundo){
                this.segundo++
                if(this.segundo >= 10){
                    this.segundo =0
                    this.segundoParte1++
                }
            }
            if(this.segundoParte1 >= 6){ 
                this.segundoParte1=0
                 this.minuto += 1
                 if(this.minuto >= 10){
                    this.minuto = 0
                    this.minutoParte1 += 1
                 }
            }if(this.minutoParte1 >=6){
                this.minutoParte1 = 0
                this.horas += 1
                if(this.horas >= 10 ){
                    horas=0
                    this.horasParte1 +=1
                }   
            
            
        }
         
            },1000)
        }
        },
        stop(){
         
            
          clearInterval(this.timeSeg)
          this.intervalo = false    
         
            },
        Mark(){
          const dados= this.elements += `<li>${this.horasParte1}${this.horas}:${this.minutoParte1}${this.minuto}:${this.segundoParte1}${this.segundo}</li>`
          if(dados.length >= 100){
            this.elements = ''
          }
          this.intervalo = false  
        },
        reset(){
            clearInterval(this.timeSeg)
            this.segundo = 0
            this.segundoParte1 = 0
            this.minuto = 0
            this.minutoParte1 = 0
            this.horas = 0
            this.horasParte1 = 0
            this.intervalo = false  
        }
           

        
        
      
        
    }
})