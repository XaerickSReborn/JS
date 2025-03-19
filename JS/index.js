// console.log("Hello world");

// window.alert("hola");

//comentario
/*
    comentario

*/

document.getElementById("tittle").textContent = "Hola causa";
document.getElementById("desc").textContent = " Upc internacional Arizona vamosss";

// 1. declaracion let x,
// 2. asignacion x = 10

let x;
x=100
x++
console.log(x)

let age = 20;
let userName = "Juan";

console.log(`tu edad es: ${age} `)
console.log(typeof age)
console.log(typeof userName)

let isLoggedIn = true;
console.log(typeof isLoggedIn)


document.getElementById("p1").textContent =`tu edad es: ${age} `
document.getElementById("p2").textContent =`tu nombre es: ${userName} `
document.getElementById("p3").textContent =`tu estado es: ${isLoggedIn} `


// arithmetic operators

let people = 1799454;
people %= 5
people--
console.log(people)



let unserName2;

// unserName2 =window.prompt("Ingrese su nombre");

// document.getElementById("btn2").onclick = function(){
//     unserName2 = document.getElementById("nombre").value;
//     document.getElementById("tit").textContent =`FORMULARIO DE MI CAUSA ${unserName2} `
// }

const PI = 3.14159;
let radius;
let circumference;



document.getElementById("btn2").onclick=function(){
    radius = document.getElementById("nombre").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("p4").textContent = `La circunferencia del circulo es: ${circumference}`;
}

//Contador
const increment = document.getElementById("btn3");
const decrement = document.getElementById("btn4");
const reset = document.getElementById("reset");
const contador = document.getElementById("contadorLabel");

let count = 0;

increment.onclick=function(){
    count++;
    contador.textContent = count;
}

decrement.onclick=function(){
    count--;
    if(count<0){
        count=0;
    }
    contador.textContent= count;
}

reset.onclick=function(){
    count = 0;
    contador.textContent = count;

}


