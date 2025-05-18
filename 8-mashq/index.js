class Calculator {
    constructor(num1,num2) {
        this.num1=num1;
        this.num2=num2;
    }
    add(){
        return this.num1+this.num2;
    }
    subtract(){
        return this.num1-this.num2;
    }
    multiply(){
        return this.num1*this.num2;
    }
    divide(){
        if (this.num2===0) {
            throw new Error("Nolga teng bolishi mumkin emas!");
        }
        return this.num1/this.num2;
    }
}
try {
    let num1 = prompt("1-sonni kiriting:");
    let num2 = prompt("2-sonni kiriting:");
    
    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        throw new Error("Iltimos, to'g'ri son kiriting!");
    }

    const calculator = new Calculator(num1, num2);

    console.log("Yig'indi:", calculator.add());
    console.log("Ayirma:", calculator.subtract());
    console.log("Ko'paytma:", calculator.multiply());
    console.log("Bo'linma:", calculator.divide());
} catch (error) {
    console.error("Xato:", error.message);
}