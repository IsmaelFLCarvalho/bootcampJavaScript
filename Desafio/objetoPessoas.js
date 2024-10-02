class user {

    namePeople;
    kgUser;
    heightUser;

    constructor(namePeople, kgUser, heightUser){
        this.namePeople = namePeople;
        this.kgUser = kgUser;
        this.heightUser = heightUser;
    }
    imc(){
        return this.kgUser / (this.heightUser * this.heightUser);
    }
    information(){
        const imcCalc = this.imc();
    console.log(`O seu nome é ${this.namePeople}, e seu IMC é de ${imcCalc.toFixed(2)}!`);
    }
}
//new user
const ismael = new user('Ismael Carvalho', 97, 1.77);
//call user ismael
ismael.information();

