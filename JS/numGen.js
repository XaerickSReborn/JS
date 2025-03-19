//random number generator


const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("result");

const min= 1;
const max= 166;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max)+ min;
    myLabel.textContent=randomNum;
}

console.log(randomNum);


const textInput=document.getElementById("textInput")
const mySubmit=document.getElementById("mySubmit")
const resultElement=document.getElementById("resultElement")

let age;

mySubmit.onclick=function(){
    age = textInput.value;
    age=Number(age);
    if(age>=100){
        
        resultElement.textContent=`TOO old`
    }else if(age==0){
        
        resultElement.textContent=`not even bornn`
    }else if(age>=18){
        
        resultElement.textContent=`old enough u have acces :) `
    }else if(age<0){
        
        resultElement.textContent=`cant be below 0 `
    }
    else{
        
        resultElement.textContent=`too young`
    }
}


const myCheckButton = document.getElementById("myCheck");
const visaBtn = document.getElementById("visaBtn");
const masterCarsdBtn = document.getElementById("masterCarsdBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmitCard = document.getElementById("mySubmitCard");
const subResult = document.getElementById("subResult");

const paymentResult = document.getElementById("paymentResult");

mySubmitCard.onclick=function(){
    if(myCheckButton.checked){
        subResult.textContent="You are subscribed";
    }else{
        subResult.textContent="You are not subscribed";
    }

    if(visaBtn.checked && myCheckButton.checked){
        paymentResult.textContent="Visa selected";
    }else{
        subResult.textContent="You are not subscribed yet!!";
    }
}


const promoMessages = 12;
const reminderMessages = 15;
const welcomeMessages = 8;
const supportMessages = 5;

// don't touch above this line

// Your code here

let totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages
let averageMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages / 4
// don't touch below this line

console.log("Total messages:", totalMessagesSent);
console.log("Average messages:", averageMessagesSent);


const sentMessages=undefined;


