class Vehicle {
    constructor(speed) {
        this.speed=speed;
    }
}
class Car extends Vehicle {
    constructor(speed,fuel) {
        super(speed);
        this.fuel=fuel;
    };
    car(){
        return `Bmw ${this.speed} km tezlikda harakatlanmoqda yoqilgisi ${this.fuel} litr`;
    }
}
let Bmw=new Car(300,2);
console.log(Bmw.car());