// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

/*let sum=0;
for (let i = 1; i<=100; i++){
    sum+=i;
    console.log(sum);
}
console.log(sum);
*/

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
/*
for (let i = 1; i <= 50; i++) {
    if(i % 2 === 0){
        console.log(i);
        continue
    }
    
}
*/
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
/*
let myArray = ["Brais", "Moure", "mouredev"]

for (let value of myArray) {
    console.log(value)
}
*/
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
/*
let myString = "¡Hola, JavaScript!"
let contador = 0;
const vocales = "aeiouAEIOU";

for (let i = 0; i < myString.length; i++) {
  if (vocales.includes(myString[i])) {
    contador++;
  }
}
console.log("El número de vocales en la cadena es: " + contador);
*/
// 6. Dado un array de números, usa un bucle para multiplicar todos 
// los números y mostrar el producto
/*
let myArray = [2, 3, 4]

for (let value of myArray) {
    console.log(value *2);
}
*/
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
/*
for(let i=1; i<=12; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
*/
// 8. Usa un bucle para invertir una cadena de texto
let myString = "¡Hola, JavaScript!"
let contador = "";
for (let i = myString.length - 1; i >= 0; i--) {
    contador += myString[i];
}
console.log(contador);
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let num1 = 0;
let num2 = 1;
let num3 = 0;
for (let i = 0; i < 10; i++) {
    console.log(num3);
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
}



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numbers = [5, 15, 3, 20, 8, 12, 7, 25, 9, 11];
let greaterThanTen = [];

for (let number of numbers) {
    if (number > 10) {
        greaterThanTen.push(number);
    }
}
console.log(greaterThanTen);
