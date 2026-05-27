let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
const result = document.querySelector("#result");
const resultBtn = document.querySelector("#resultBtn");

resultBtn.addEventListener('click', (e)=> {
    console.log(Number(num1)+ Number(num2));
    
});