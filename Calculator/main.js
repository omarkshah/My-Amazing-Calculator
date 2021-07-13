const numArray = document.getElementsByClassName('number');
const btnEnter = document.getElementById('enter');
const inputBox = document.getElementById('input-screen');
const outputBox = document.getElementById('output-screen');
const operatorArray = document.getElementsByClassName('operator');
const prevAnswer = document.getElementById('answer');
const btnClear = document.getElementById('c');
const btnDelete = document.getElementById('delete');

let firstNum = '';
let secondNum = '';
let operator = '';
let opBool = false;
let answer = 0

if(opBool == false){
    
    prevAnswer.addEventListener('click', () => {
        if (opBool == false){
            firstNum = answer;
        }
        else{
            secondNum = answer;
        }
    })
    
    for (let i = 0; i < numArray.length; i++){
        numArray[i].addEventListener('click', () => {
            
            if (opBool == false){
            firstNum = firstNum + numArray[i].innerText;
            inputBox.innerText = firstNum;
            }
            else{
                secondNum = secondNum + numArray[i].innerText;
                inputBox.innerText = firstNum + ' ' + operator + ' ' + secondNum;
                console.log(opBool);
            }
        })          
        
    }

    for (let i = 0; i < operatorArray.length; i++){
        operatorArray[i].addEventListener('click', () => {
            opBool = true;
            operator = operatorArray[i].innerText;
            inputBox.innerText = firstNum + ' ' + operatorArray[i].innerHTML
        })
    }
}

btnClear.addEventListener('click', ()=>{
    firstNum = '';
    secondNum = '';
    operator = '';
    opBool = false;
    inputBox.innerText = '';
    outputBox.innerText = '';
})

btnDelete.addEventListener('click', () => {
    
    let tempNum = '';

    if (!opBool){
        for (let i = 0; i < firstNum.length - 1; i++){
             tempNum = tempNum + firstNum[i];
        }
        firstNum = tempNum;
        inputBox.innerText = firstNum;
    }
    else if(opBool && secondNum == ''){
        operator = '';
        opBool = false;
        inputBox.innerText = firstNum;
    }
    else{
        for (let i = 0; i < secondNum.length - 1; i++){
            tempNum = tempNum + secondNum[i];
       }
       secondNum = tempNum;
       inputBox.innerText = firstNum + ' ' + operator + ' ' + secondNum;
    }
})

// Enter
btnEnter.addEventListener('click', () => {
    
    opBool = false;

    if (operator == '+'){
        answer = parseFloat(firstNum) + parseFloat(secondNum);
    }
    else if(operator == '-'){
        answer = parseFloat(firstNum) - parseFloat(secondNum);
    }
    else if(operator == 'x'){
        answer = parseFloat(firstNum) * parseFloat(secondNum);
    }
    else if(operator == '÷'){
        answer = parseFloat(firstNum)/parseFloat(secondNum);
    }

    firstNum = ' ';
    secondNum = ' ';
    outputBox.innerText = answer;
    inputBox.innerText = "";

})
