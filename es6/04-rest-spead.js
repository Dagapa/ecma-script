// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; //Desestructuracion
console.log(a, fruits[1]);

//Object destructuring

let user = {
    username: 'David',
    age: 20
}
let {
    username,
    age
} = user
console.log(username, user.age);

//spead operator

let person = {
    name: 'David',
    age: 20
}
let country = 'CO'
let data = {
    id: 1,
    ...person,
    country //trae informacion y agrega nueva información 
}

console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);