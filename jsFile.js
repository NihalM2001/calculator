
let operator='';
let currentValue='';
let previousValue='';
let temp='';
let swapFlag=0;             //for swapping currentValue and previousValue
let decimalFlag=0;

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

let decimal=document.getElementById('decimal');
decimal.addEventListener('click',function(){ getNumber(this.value);})

let previousScreen=document.getElementById('previousScreen');
let currentScreen=document.getElementById('currentScreen');

function getNumber(num)
{
    if(currentValue.length<8)
    {
        if( num==='.' && decimalFlag===0)   //checks if decimalFlag is zero. Only enters the decimal when decimal flag is zero
        {
            currentValue+=num;              //concatenates the numbers into the string  
            decimalFlag=1;
        }
        else if(num!=='.')
        {
            currentValue+=num;
        }
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
    if(currentValue!=='' || currentValue!==null)                    //everytime operators are click consecutively, currentvalue is null or zero. only enables operator when currentValue is not null
    {
        if(currentValue!==null && previousValue!==null)             //only does calculation when both currentValue and previousValue has some value
        {
            operation();
            operatorDisplay();
        }
        operator=op;
        console.log(`operator is ${operator}`);
        if(swapFlag===0)                     //for assigning the value of temp to previousValue only at the start of the program as every other time, previousValue is being updated by function operation()
        {
            previousValue=temp;
        }

        currentValue='';
        previousScreen.textContent=previousValue+' '+operator;
        currentScreen.textContent='';
        }
    
    decimalFlag=0;                      //resets decimalFlag to zero and thus decimal can be entered when using getNumber() function
    swapFlag=1;                     

    //console.log(`curVal is: ${currentValue} and preVal is: ${previousValue}`);

    //console.log(previousValue);
}

function clearAll()                 //resets every values and clears result from the display
{
    currentScreen.textContent='';
    previousScreen.textContent='';
    previousValue='';
    currentValue='';
    swapFlag=0;
    decimalFlag=0;
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
        else if(currentValue===0)
        {
            alert("division by zero isn't possible.");
            clearAll();
        }
        
    }
    currentValue='';
    previousValue=round(previousValue);
    previousValue=previousValue.toString();
    currentValue=currentValue.toString();
    console.log(`previousValue is ${previousValue} and currentValue is ${currentValue}`);
}

function equalDisplay()             //for displaying result on clicking 'Equal'
{
    currentScreen.textContent=previousValue;
    previousScreen.textContent='';

    /*setTimeout(() => {  alert("Reloading the webpage. Resetting all values");  },000);

    setTimeout(() => {  clearAll();  },4000);           //calls clearAll() function after 5 seconds of presseing '='*/
}

function operatorDisplay()              //for displaying results on clicking an Operator
{
    previousScreen.textContent=previousValue+''+operator;
}

function round(num)
{
    return Math.round(num*1000) /1000;
}