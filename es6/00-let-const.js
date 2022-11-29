var lastName = 'David';
lastName = 'Oscar'; //Reasignar variable
console.log(lastName);

let fruit = 'Apple'; //Declarar y asignar
fruit = 'Kiwi';
console.log(fruit);

//No se puede reasignar un valor con const
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
