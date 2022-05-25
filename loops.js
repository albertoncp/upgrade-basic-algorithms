//Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console log sus valores.



for (const places of placesToTravel) {
    console.log(places)  
}

console.log("Ejer2");

//Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log("El alien tiene " + key ,"con valor" , alien[key]);
    }

console.log("Ejer3");

//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos 
//que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'},
 {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, 
 {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];
 

placesToTravel.forEach(function(travel, i) {
    if (travel.id == 40 || travel.id == 11) {
        placesToTravel.splice(i, 1)
        
    }
});

console.log(placesToTravel);
