//classes

class person { 
    name; 
    age;

        description(){
            console.log(`My name is ${this.name}, and my age is ${this.age} years old.`);
        }
}

const ismael = new person();
ismael.name = 'Ismael Carvalho';
ismael.age = 30;

const jhersica = new person();
jhersica.name = 'Jhersica Fernandes';
jhersica.age = 33;

ismael.description();
jhersica.description();


