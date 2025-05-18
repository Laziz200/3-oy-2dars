class Clock {
    constructor() {
        this.currentTime=new Date();
        setInterval(()=>{
            this.currentTime=new Date();
        },1000);
    }
    displayTime(){
        return this.currentTime.toLocaleTimeString();
    }
}
let clock=new Clock();
console.log(clock.displayTime);

setInterval(()=>{
    console.log(clock.displayTime());
    },1000);
