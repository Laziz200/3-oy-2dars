class Student {
    constructor(id,name,grades1,grades2,grades3) {
        this.id=id;
        this.name=name;
        this.grades1=grades1;
        this.grades2=grades2;
        this.grades3=grades3;
    };
    calculateAverage(){
        let sum=(this.grades1+this.grades2+this.grades3)/3;
        return `talabaning ortacha bahosi=${Math.round(sum)}`;
    }
}
let result=new Student(Number(prompt("id:")),prompt("ismi:"),Number(prompt("ball1:")),Number(prompt("ball2:")),Number(prompt("ball3:")));

console.log(result);
console.log(result.calculateAverage());

