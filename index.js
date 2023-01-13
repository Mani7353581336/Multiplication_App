const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionE1 = document.getElementById('question');

const inputE1 = document.getElementById("input");

const formE1 = document.getElementById("form");

// let score = 0;

const scoreE1 = document.getElementById("score")

// get score value from localStorage

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score= 0;
}
// ---------------

scoreE1.innerText=`score:${score}`;

questionE1.innerText= `what is ${num1} multiply by ${num2}`;

const correctAns = num1 * num2;

formE1.addEventListener("submit",()=>{
const userAns = +inputE1.value;
if(userAns === correctAns){
    score++
    console.log(score)
    updateLocalStorage()
}else{
    score--
    console.log(score)
    updateLocalStorage()
}
})

// storing score variable in localStorage 

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}



