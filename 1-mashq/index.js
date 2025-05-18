class Person {
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    greet(){
        return `Ismim ${this.name} yoshim ${this.age} da.`;
    }
};
let result=new Person(prompt("ismingizni kiriting:"),Number(prompt("yoshingizni kiriting:")));
console.log(result);
console.log(result.greet());
