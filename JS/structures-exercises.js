
// 1. Crea un array que almacene cinco animales
let myArray = []
myArray=["Perro","Gato","Loro","Tigre","Leon"]
console.log(myArray);
// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Elefante");
myArray.push("Jirafa");
console.log(myArray);
// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1);
console.log(myArray);
// 4. Crea un set que almacene cinco libros
let mySet = new Set();
mySet=new Set(["El principito","Lord of the rings","Harry potter","the hobbit","the act of jesus"]);
console.log(mySet);
// 5. Añade dos más. Uno de ellos repetido
mySet.add("Casita revenge");
mySet.add("El principito");
console.log(mySet);
console.log(mySet.size);
// 6. Elimina uno concreto a tu elección
mySet.delete("El principito");
console.log(mySet);
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"]
]);
console.log(myMap);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has(5));
// 9. Añade al mapa una clave con un array como que almacene los meses de verano
myMap.set("Verano",["Junio","Julio","Agosto"]);
console.log(myMap);
console.log(myMap.size)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = ["Hola"];
console.log(myArray2);

let mySet2 = new Set(myArray2);
console.log(mySet2);

let myMap2 = new Map();
myMap2.set("Mi Array",mySet2);
console.log(myMap2);