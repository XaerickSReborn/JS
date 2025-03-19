
// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName="Eric";
if(myName=="Eric"){
    console.log("Mi nombre es "+ myName);
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const user="uSER";
const pass="pASS";
if(user == "uSER" && pass=="pASS"){
    console.log("User and password correct...");
}else{
    console.log("User and password incorrect...");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numPosNegCero=-1;

if(numPosNegCero>0){
    console.log("El numero es positivo");
}else if(numPosNegCero<0){
    console.log("El numero es negativo")
}else{
    console.log("El numero es cero");
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad=15;
if(edad>=18){
    console.log("Puedes votar");
} else{
    console.log("No puedes votar, te falta " + (18-edad) + " años");
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad2=14;
const status = edad2 >= 18 ? "adulto" : "menor";
console.log(status);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes=9;
if(mes == 1 || mes == 2 || mes==12){
    console.log("Invierno");
}else if(mes >=3 && mes <=5){
    console.log("Primavera");
}else if(mes >=6 && mes <=8){
    console.log("Verano");
}else{
    console.log("Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let month="Febrero";
if(month=="Enero" || month=="Marzo" || month=="Mayo" || month=="Julio" || 
    month=="Agosto" || month=="Octubre" || month=="Diciembre"){
    console.log(`El mes ${month} tiene 31 dias`);
}else if (month=="Abril" || month=="Junio" || month=="Septiembre" || month=="Noviembre"){
    console.log(`El mes ${month} tiene 30 dias`);
}else{
    console.log(`El mes ${month} tiene 28 dias`);
}
// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let lan=3;
let language
switch(lan){
    case 1:
        language = "English";
        console.log(`The language selected was ${language}. Message: "Hello"`);
        break;
    case 2:
        language = "Español";
        console.log(`El lenguaje seleccionado fue ${language}. Mensaje: "Hola"`);
        break;
    case 3:
        language = "Français";
        console.log(`La langue sélectionnée était ${language}. Message: "Bonjour"`);
        break;
    default:
        console.log("Language not found");
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month2= "Febrero"
let estacion

switch(month2){
    case "Enero":
    case "Febrero":
    case "Diciembre":
        estacion = "Invierno";
        console.log(`La estacion del año en el mes de ${month2} es ${estacion}`);
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        estacion = "Primavera";
        console.log(`La estacion del año en el mes de ${month2} es ${estacion}`);
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        estacion = "Verano";
        console.log(`La estacion del año en el mes de ${month2} es ${estacion}`);
        break;
    default:
        estacion = "Otoño";
        console.log(`La estacion del año en el mes de ${month2} es ${estacion}`);
        
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
month2 = "Octubre"
let monthDays
switch(month2){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        monthDays = 31;
        console.log(`El mes ${month2} tiene ${monthDays} dias`);
        break;
    case "Abril":
    case "Junio":
    case "Mayo":
    case "Septiembre":
    case "Noviembre":
        monthDays = 30;
        console.log(`El mes ${month2} tiene ${monthDays} dias`);
        break;
    default:
        monthDays = 28;
        console.log(`El mes ${month2} tiene ${monthDays} dias`);

}
