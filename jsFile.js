let operatorFlag=0;
let decimalFlag=0;
let operator='';
let currentValue='';
let previousValue='';
let temp='';
let flag=0;             //for swapping currentValue and previousValue

let one=document.getElementById('1');
one.addEventListener("click", function(){ getNumber(this.value); } );

let two=document.getElementById('2');
//two.addEventListener("click", display);
two.addEventListener("click", function(){ getNumber(this.value); } );

let three=document.getElementById('3');
three.addEventListener("click", function(){ getNumber(this.value); } );

let four=document.getElementById('4');
four.addEventListener("click", function(){ getNumber(this.value); } );

let five=document.getElementById('5');
five.addEventListener("click", function(){ getNumber(this.value); } );

let six=document.getElementById('6');
six.addEventListener("click", function(){ getNumber(this.value); } );

let seven=document.getElementById('7');
seven.addEventListener("click", function(){ getNumber(this.value); } );

let eight=document.getElementById('8');
eight.addEventListener("click", function(){ getNumber(this.value); } );

let nine=document.getElementById('9');
nine.addEventListener("click", function(){ getNumber(this.value); } );

let zero=document.getElementById('0');
zero.addEventListener("click", function(){ getNumber(this.value); } );

let add=document.getElementById('add');
add.addEventListener("click", function(){ getOperator(this.value); } );

let subtract=document.getElementById('subtract');
subtract.addEventListener("click", function(){ getOperator(this.value); } );

let multiply=document.getElementById('multiply');
multiply.addEventListener("click", function(){ getOperator(this.value); } );

let divide=document.getElementById('divide');
divide.addEventListener("click", function(){ getOperator(this.value); });

let clear=document.getElementById('clear');
clear.addEventListener("click", clearAll);

let equate=document.getElementById('equate');
equate.addEventListener("click", function(){
    operation(); 
    equalDisplay();
});

let previousScreen=document.getElementById('previousScreen');
let currentScreen=document.getElementById('currentScreen');

//refactoring section starts here



//refactoring section ends here

function getNumber(num)
{
    //currentScreen.textContent=num;
    if(currentValue.length<8)
    {
        currentValue+=num;              //concatenates the numbers into the string
    }
    else
    {
        alert("maximum limit reached")
    }

    temp=currentValue;               //temporary variable assigned for swapping currentValue and previousValue
    currentScreen.textContent=currentValue;
    console.log(`curVal is: ${currentValue} and preVal is: ${previousValue} and operator is ${operator}`); //for checking the currentValue and previousValue
    
}

function getOperator(op)
{
    if(currentValue!==null && previousValue!==null)
    {
        operation();
        operatorDisplay();
    }
    operator=op;
    console.log(`operator is ${operator}`);
    if(flag===0)                            //for assigning the value of temp to previousValue only at the start of the program 
    {
        previousValue=temp;
    }

    currentValue='';
    previousScreen.textContent=previousValue+' '+operator;
    currentScreen.textContent='';
    decimalFlag=0;
    flag=1;

    //console.log(`curVal is: ${currentValue} and preVal is: ${previousValue}`);

    //console.log(previousValue);
}

function clearAll()
{
    currentScreen.textContent='';
    previousScreen.textContent='';
    previousValue='';
    currentValue='';
    console.clear();
    location.reload();
}

function operation()
{   
    if(currentValue === '' && previousValue === '')
    {
        alert("Enter numbers inorder to proceed with calculation");
        location.reload();
    }
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);

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
    else if(operator === '/')
    {   
        if(currentValue !== 0)
        {
            console.log(`hey this is / operator. the currentValue here is: ${currentValue}`)
            previousValue/=currentValue;
        }
        else
        {
            alert("division by zero isn't possible.");
            clearAll();
        }
        
    }
    currentValue='';
    previousValue=round(previousValue);
    previousValue=previousValue.toString();
    currentValue=currentValue.toString();
    console.log(previousValue);
}

function equalDisplay()             //for displaying result on clicking 'Equal'
{
    currentScreen.textContent=previousValue;
    previousScreen.textContent='';
}

function operatorDisplay()              //for displaying results on clicking an Operator
{
    previousScreen.textContent=previousValue+''+operator;
}

function round(num)
{
    return Math.round(num*1000) /1000;
}