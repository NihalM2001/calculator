let 0;
let operatorFlag=0;
let decimalFlag=0
let operator='';
let currentValue='';
let previousValue='';

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
equate.addEventListener("click", operation);

let previousScreen=document.getElementById('previousScreen');
let currentScreen=document.getElementById('currentScreen');


function getNumber(num)
{
    //new stuff from here
    currentScreen.textContent=num;
    currentValue+=num;              //concatenates the numbers into the string
    currentScreen.textContent=currentValue;
    console.log(`current value is: ${currentValue}`);

}

function getOperator(op)
{
    operator=op;
    previousValue=currentValue;
    currentValue='';
    previousScreen.textContent=previousValue+' '+operator;
    currentScreen.textContent='';

    console.log(`curVal is: ${currentValue} and preVal is: ${previousValue}`);
}

function clearAll()
{
    currentScreen.textContent='';
    previousScreen.textContent='';
    previousValue='';
    currentValue='';
}

function operation(previousValue,currentValue,operator)
{
    previousValue=parseInt(previousValue);
    currentValue=parseInt(currentValue);

    if(operator === '+')
    {
        previousValue+=currentValue;    
    }
    else if(operator === '-')
    {
        previousValue-=currentValue;
    }
    else if(operator === '*')
    {
        previousValue*=currentValue;
    }
    else
    {   
        if(currentValue !== 0)
        {
            previousValue/=currentValue;
        }
        else
        {
            console.log("division by zero isn't possible.");
            clearAll();
        }
        
    }
    return previousValue;
}