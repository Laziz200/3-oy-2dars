class Rectangle {
    constructor(width,height) {
        this.width=width;
        this.height=height;
    }
    area(){
        let sum=this.width*this.height;
        return `Maydon=${sum}`;
    };
    perimetr(){
        let sum=2*(this.width+this.height);
        return `Peremetr=${sum}`
    }
};
let result=new Rectangle(Number(prompt("tortburchakning enini kiriting:")),Number(prompt("tortburchakning boyini kiriting:")));
console.log(result);
console.log(result.area());
console.log(result.perimetr());

