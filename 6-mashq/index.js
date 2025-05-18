class Employee {
    constructor(name,position,salary) {
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    giveRaise(percentage){
        let sum=this.salary*percentage/100;
        return `${this.salary+sum}`;
    }
}
let newsum=new Employee(prompt("name:"),prompt("position:"),Number(prompt("salary:")));
console.log(newsum.giveRaise(Number(prompt("nech foiz qoshmoqchisiz:"))));
