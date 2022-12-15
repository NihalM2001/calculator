let arr=[];
let res=0;

let one=document.getElementById('1');
one.addEventListener("click", display);

let two=document.getElementById('2');
two.addEventListener("click", display);

let three=document.getElementById('3');
three.addEventListener("click", display);

let four=document.getElementById('4');
four.addEventListener("click", display);

let five=document.getElementById('5');
five.addEventListener("click", display);

let six=document.getElementById('6');
six.addEventListener("click", display);

let seven=document.getElementById('7');
seven.addEventListener("click", display);

let eight=document.getElementById('8');
eight.addEventListener("click", display);

let nine=document.getElementById('9');
nine.addEventListener("click", display);

let zero=document.getElementById('0');
zero.addEventListener("click", display);

let add=document.getElementById('add');
add.addEventListener("click", display);

let subtract=document.getElementById('subtract');
subtract.addEventListener("click", display);

let multiply=document.getElementById('multiply');
multiply.addEventListener("click", display);

let divide=document.getElementById('divide');
divide.addEventListener("click", display);

let clear=document.getElementById('clear');
clear.addEventListener("click", clear);

let equate=document.getElementById('equate');
equate.addEventListener("click", display); 

//let display=document.getElementById('display');


function display()
{
    console.log(this.value);
    arr.push(this.value);
    console.log(arr);
    document.getElementById('display').innerHTML=arr.join('');
}