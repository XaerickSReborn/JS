/* 

// 1. Crea una variable para cada operación aritmética
let sum = 5+5;
let res = 5-3;
let multi=5*5;
let div = 12/3;
let mod= 5%2;

console.log(sum);
console.log(res);
console.log(multi);
console.log(div);
console.log(mod);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso 
// de las variables utilizadas para las operaciones aritméticas
let sumAsig = sum;
let resAsig = res;
let multiAsig = multi;
let divAsig = div;
let modAsig = mod;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(sum > res);
console.log(res < multi);
console.log(div >= mod);
console.log(mod <= res);
console.log(multi >= res);
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(sum < res);
console.log(res > multi);
console.log(div <= mod);
console.log(mod >= res);
console.log(multi <= res);
// 5. Utiliza el operador lógico and
console.log(multi >= res && res < multi);
// 6. Utiliza el operador lógico or
console.log(multi >= res || multi < res);
// 7. Combina ambos operadores lógicos
console.log((multi <= res && res < multi) || (multi >= res || multi < res));
// 8. Añade alguna negación
console.log(!(multi <= res && res < multi) || (multi >= res || multi < res));
// 9. Utiliza el operador ternario
let tern = multi >= res && res < multi ? "Verdadero":"Falso";
console.log(tern);
// 10. Combina operadores aritméticos, de comparáción y lógicas

let laSuma = 5+2;
let laResta = 5-2;
console.log(laSuma > laResta && laSuma < laResta);
*/


// 1. Concatena dos cadenas de texto
let myString1 = "Hello";
let myString2 = "Everyone";
let Grettings = myString1 + " " + myString2;
console.log(Grettings);
// 2. Muestra la longitud de una cadena de texto
console.log(myString2.length)
// 3. Muestra el primer y último carácter de un string
console.log(myString2.charAt(0), myString2.charAt(7));
// 4. Convierte a mayúsculas y minúsculas un string
console.log(myString2.toUpperCase(),myString2.toLowerCase());
// 5. Crea una cadena de texto en varias líneas
let textFor = `hola
como estas bro
jaja`;
console.log(textFor);
// 6. Interpola el valor de una variable en un string
let textFor2 = "gola";
console.log(`hola ${textFor2}`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let textFor3="     Hola como estas bro    ";

console.log(textFor3.replace(/ /g,"-"));
console.log(textFor3.trim(textFor3));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(textFor3.includes("como"));
// 9. Comprueba si dos strings son iguales
const myLetter ="alo";
const myLetter2="alo";
console.log(myLetter===myLetter2);
// 10. Comprueba si dos strings tienen la misma longitud

console.log(myLetter.length === myLetter2.length);