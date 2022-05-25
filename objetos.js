const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character.age);

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 

console.log("Soy", firstName,lastName,"tengo",age,"años y me gustan los lobos");

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let index = 0; index <= 9; index++) {
    console.log(index);
}


//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.
for (let index = 0; index <= 9; index++) {
    if (index % 2 == 0) {
        console.log(index)
    }
    
}