class Order {
    constructor() {
        this.items=[];
    }
    addItem(item,quantity){
        if (!item.name || !item.price || quantity<=0) {
            console.log("nogri mahsulot yoki miqdor kiritildi");
            return;
        }
        const existingItem=this.items.find(i=>i.item.name===item.name);
        if (existingItem) {
            existingItem.quantity+=quantity;
        }
        else{
            this.items.push({item,quantity});
        }
    }
    removeItem(item){
        this.items=this.items.filter(i=>i.item.name !==item.name);
    }
    calculateTotal(){
        return this.items.reduce((total,i)=>total+(i.item.price*i.quantity),0);
    }
}
const order=new Order();
order.addItem({name:"telefon",price:500000},2);
order.addItem({name:"noutbuk",price:800000},1);

console.log("Buyurtma ro'yxati:");
order.items.forEach(i => {
    console.log(`${i.item.name}: ${i.quantity} dona, Narxi: ${i.item.price * i.quantity} so'm`);
});

console.log("Umumiy narx:", order.calculateTotal(), "so'm");


order.removeItem({ name: "telefon" });

console.log("\nTelefon o'chirilgandan keyin buyurtma ro'yxati:");
order.items.forEach(i => {
    console.log(`${i.item.name}: ${i.quantity} dona, Narxi: ${i.item.price * i.quantity} so'm`);
});

console.log("Yangilangan umumiy narx:", order.calculateTotal(), "so'm");