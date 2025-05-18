class Stack {
    constructor() {
        this.items=[];
    }
    push(){
        this.items.push(element);
    }
    pop(){
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length===0;
    }
}
const stack = new Stack();
console.log("Bo'shmi?", stack.isEmpty()); 
stack.push(10);
stack.push(20);
stack.push(30);