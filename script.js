// GLOBAL VARIABLES 
// three variable
// var state of number = starts at +
// var number = starts at 0  - store as a string instead as an array
// var acummulator =  starts at 0  
// var operation = sign  (start a null)
// all operator cause an action


let posnegState = '';
let numberEntry = '';
let accumulator = 0;
let operator = null;
let operationMemArray = [];
let operationDisplay = [];


function display(value) {
    document.getElementById("inputs").innerHTML = posnegState + value;
    console.log("acc:", accumulator);
    console.log("sign:", operator);
    console.log("number:", posnegState, numberEntry);
    console.log(operationMemArray);
}
function displayOperation(value) {
    document.getElementById("operation-string").innerHTML = value;
}
function clearEntry() {
    posnegState = '';
    numberEntry = '';
    operator = null;
    display(0);
    displayOperation(0) 
}
function clearAll() {
    clearEntry();
    accumulator = 0;
    operationMemArray = [];
}
function toggleState() {
    if (posnegState === '') {
        posnegState = '-'
    } else {
        posnegState = '';
    }
    display(numberEntry);
}
function makePercent() {
    if (numberEntry === '') {
        return;
    } else {
        let percentVal = eval(numberEntry) / 100;
        numberEntry = percentVal.toString();
        display(numberEntry);
    }
}
function logDigit(value) {
    const validRegex = /[0-9]|\./;
    if (validRegex.test(value) && value !== '.') {
        numberEntry = numberEntry + value;
        // ugly code but works to handle decimal point input...     
    } else if (validRegex.test(value) && value === '.' && numberEntry !== '') {
        if (numberEntry.includes('.')) {
            return;
        } else {
            numberEntry = numberEntry + value;
        }
    } else if (validRegex.test(value) && value === '.' && numberEntry === '') {
        numberEntry = 0 + value;
    } else {
        return;
    }
    display(numberEntry);
}
function equals() {
    if (operator === null) {
        operationMemArray.push(posnegState + numberEntry);
        operationDisplay.push(posnegState + numberEntry);
        accumulator = eval(operationMemArray.join(''));
        numberEntry = '';
        console.log("acc:", accumulator);
        console.log("sign:", operator);
        console.log("number:", posnegState, numberEntry);
        console.log(operationMemArray);
    } else if (operator !== null) {
        operationMemArray.push(accumulator);
        operationMemArray.push(operator);
        operationMemArray.push(posnegState + numberEntry);
        operationDisplay.push(posnegState + numberEntry);
        accumulator = eval(operationMemArray.join(''));
        posnegState = '';
        numberEntry = '';
        display(accumulator);
      //  operationDisplay.push(posnegState + numberEntry);

    }
}
function arithmetic(operatorVal) {
    operator = operatorVal;
    operationMemArray = [];
    operationDisplay.push(operator);
    displayOperation(operationDisplay.join(''));
}


function actionInput(input) {
    let inputVal = input.target.value;
    let inputID = input.target.id;
    console.log(inputID, inputVal);
    if (inputID) {
        switch (inputID) {
            case 'CE': clearEntry(); break;
            case 'AC': clearAll(); break;
            case 'pos-neg': toggleState(); break;
            case 'percent': makePercent(); break;
            case 'equal':
                equals(inputVal);
                break;
            case 'add':
            case 'substract':
            case 'divide':
            case 'multiply':
                equals(inputVal);
                arithmetic(inputVal);
                break;
        }
    } else {
        logDigit(inputVal);
    }
}   

 // DOM EVENT LISTENTERS //
window.onload = function () {
    document.getElementById("clickable").addEventListener("click", actionInput, false);
}

   // numberEntry button - initialise all number with zero. Append to end current displayed number else start new number
   // plusminue button - toggle minus state         
   // equals button -  check operator if null do nothing
                        // else apply arimetic operation to accumulator and (apply state & logic rules to validate/cleanupNumber - Eval number string)
                        // number (acc operator num) and save result as accumulator
                        // new number becomes zero
                        // display new number 
    // arithmatic button - do equals button logic, then set operator to arithmetic sign.
    // percentage = eval number into number set current number to number/100 = convert back to previous format (string) 
    // CE - clear state, operation, number
    // AC - call CE, clear Accummulator   
