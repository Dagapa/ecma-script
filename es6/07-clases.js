//Declarando una clase
class User {

}

class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};
//instancia de la clase
const dagapa = new user();
console.log(dagapa.greeting());
//Otra instancia
const gndx = new user();


//Constructor

class user {
    constructor() {
        console.log('Nuevo usuario')
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

//This

class user {
    constructor(name) {
        this.name = name;
    }
    //Metodos 
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name} `
    }
}

const juan = new user('Juan');
console.log(juan.greeting());

//Setters and Getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos 
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name} `
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new user('David', 15)
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);