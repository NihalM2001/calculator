let arr=[];
let res=0;
let operatorFlag=0;
let decimalFlag=0

let one=document.getElementById('1');
one.addEventListener("click", function(){ getNumber(this.value); } );

let two=document.getElementById('2');
//two.addEventListener("click", display);
two.addEventListener("click", function(){ getNumber(this.value); } );

let three=document.getElementById('3');
//three.addEventListener("click", display);
three.addEventListener("click", function(){ getNumber(this.value); } );

let four=document.getElementById('4');
//four.addEventListener("click", display);
four.addEventListener("click", function(){ getNumber(this.value); } );

let five=document.getElementById('5');
//five.addEventListener("click", display);
five.addEventListener("click", function(){ getNumber(this.value); } );

let six=document.getElementById('6');
//six.addEventListener("click", display);
six.addEventListener("click", function(){ getNumber(this.value); } );

let seven=document.getElementById('7');
//seven.addEventListener("click", display);
seven.addEventListener("click", function(){ getNumber(this.value); } );

let eight=document.getElementById('8');
//eight.addEventListener("click", display);
eight.addEventListener("click", function(){ getNumber(this.value); } );

let nine=document.getElementById('9');
//nine.addEventListener("click", display);
nine.addEventListener("click", function(){ getNumber(this.value); } );

let zero=document.getElementById('0');
//zero.addEventListener("click", display);
zero.addEventListener("click", function(){ getNumber(this.value); } );

let add=document.getElementById('add');
//add.addEventListener("click", display);
add.addEventListener("click", function(){ getOperator(this.value); } );

let subtract=document.getElementById('subtract');
//subtract.addEventListener("click", display);
subtract.addEventListener("click", function(){ getOperator(this.value); } );

let multiply=document.getElementById('multiply');
//multiply.addEventListener("click", display);
multiply.addEventListener("click", function(){ getOperator(this.value); } );

let divide=document.getElementById('divide');
//divide.addEventListener("click", display);
divide.addEventListener("click", function(){ getOperator(this.value); });

let clear=document.getElementById('clear');
clear.addEventListener("click", clearAll);

let equate=document.getElementById('equate');
equate.addEventListener("click", display); 

//let display=document.getElementById('display');


function display()
{
    document.getElementById('display').innerHTML=arr.join('');
}

function getNumber(num)
{
    arr.push(num);
    console.log(arr.join(''));
    operatorFlag=0;
    display();
}

function getOperator(num)
{
    if(operatorFlag===0)
    {
        arr.push(num);
    }    
    operatorFlag=1;
    display();
}

function clearAll()
{
    arr=[];
    display();  
}