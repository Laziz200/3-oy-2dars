class BankAccaunt {
    #blance;
    constructor(username, initialBalance) {
        this.username=username;
        this.#blance=initialBalance
    };
    checkBalance(){
        return `Sizning balansingizda: ${this.#blance} summa bor`
    };
    depozit(amount){
        if (amount>0) {
            this.#blance+=amount;
            return `Muvafaqiyatli qo'shildi`;
        }
        else{
            return `Qiymat xato`;
        }
    };
    withdraw(amount){
        if (this.#blance>0 && this.#blance>amount && amount>0) {
            this.#blance-=amount;
            return `Muvafaqiyatli yechildi`;
        }
        else{
            return `Qiymat xato`;
        }
    };
};
let account=new BankAccaunt(prompt("Ismingiz?"),1000);
console.log(account.checkBalance());
