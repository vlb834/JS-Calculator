// JAVASCRIPT CALCULATOR
// known issues - occassionly after EVAL display shows "-0" // TO FIX

// GLOBAL VARIABLES
let posnegState = '';
let numberEntry = '';
let accumulator = 0;
let operationMemArray = [];
let lastInputVal = '';
const signs = /[*|/|+|-]/;

// DISPLAY 
function display(value) { // numberEntry and operation results
    document.getElementById("inputs").innerHTML = posnegState + value;
}
function displayOperation(value) { // operation string being evaluated
    document.getElementById("operation-string").innerHTML = value;
}

// CLEARING
function clearEntry() { // does not clear the last inputted operation sign
    posnegState = '';
    numberEntry = '';
    display(0);
}
function clearAll() {
    clearEntry();
    displayOperation(0);
    accumulator = 0;
    operationMemArray = [];
    lastInputVal = '';
}

// FUNCTIONS THAT ACT ONLY on displayed numberEntry - no effect on operation memory array
function toggleState() {
    if (posnegState === '') {
        posnegState = '-'
    } else {
        posnegState = '';
    }
    display(numberEntry);
}
function makePercent() {
    if (numberEntry === '') { // ensures button does nothing of no number to act upon
        return;
    } else {
        let percentVal = eval(numberEntry) / 100;
        numberEntry = percentVal.toString();
        display(numberEntry);
    }
}

// OPERATION FUNCTIONS 

// Logs the digit input into the numberEntry
function logDigit(value) {
    const validRegex = /[0-9]|\./;
    if (validRegex.test(value) && value !== '.') {
        numberEntry = numberEntry + value;
    } else if (validRegex.test(value) && value === '.' && numberEntry !== '') {
        if (numberEntry.includes('.')) { // ensures a numberEntry cannot have more than one decimal point
            return;
        } else {
            numberEntry = numberEntry + value;
        }
    } else if (validRegex.test(value) && value === '.' && numberEntry === '') {
        numberEntry = 0 + value;  // ensures decimal number starts with leading zero
    } else {
        return;
    }
    display(numberEntry);
}
// EVALUATES OPERATION ARRAY and logs result into cleared operation array awaiting new follow up inputs
function equals(inputVal) {
    // if operation array ends in operator sign, then pops last sign and EVALS
    if (lastInputVal === '+' || lastInputVal === '-' || lastInputVal === '/' || lastInputVal === '*') {
        operationMemArray.pop();
    } 
    operationMemArray.push(posnegState);
    operationMemArray.push(numberEntry);
    accumulator = eval(operationMemArray.join(''));
    posnegState = '';
    numberEntry = '';
    display(accumulator);
    operationMemArray.push(inputVal);
    displayOperation(operationMemArray.join(''));
    operationMemArray = [];
    operationMemArray.push(accumulator);
}
// Logs the current numberEntry and operation sign inputted into the operation array / resets numberEntry
function arithmetic(operatorVal) {
    operationMemArray.push(posnegState);
    operationMemArray.push(numberEntry);
    operationMemArray.push(operatorVal);
    posnegState = '';
    numberEntry = '';
}
// Ensures nothing happens to an operation result (accumulator variable), & function only acts on a numberEntry
function equalLastInputCheck() { 
    if (lastInputVal === '=') {
        clearAll();
    }
}
// Determines action of button press based on last button input
function lastInputCheck(operatorVal) {
    display(0);
    // can this IF statement be rewritten to use the global signs constant????
    if (lastInputVal === '+' || lastInputVal === '-' || lastInputVal === '/' || lastInputVal === '*') {
        // Changes last operator sign in operation array if multiple signs pressed in succession rather than operator followed by number.
        operationMemArray.pop();
        operationMemArray.push(operatorVal);
    } else {
        arithmetic(operatorVal);
    }
    displayOperation(operationMemArray.join(''));
}

// LOGS EVENT BUTTON CLICK and determines control flow
function actionInput(input) {
    let inputVal = input.target.value;
    let inputID = input.target.id;
    if (inputID) {
        switch (inputID) {
            case 'CE': 
                clearEntry(); 
                inputVal = "+"; // inputVal set to prevent doubling up of operators in array.
                break; 
            case 'AC': clearAll(); break;
            case 'pos-neg': equalLastInputCheck(); toggleState(); break;
            case 'percent': equalLastInputCheck(); makePercent(); break;
            case 'equal':
                // ensures button only performs evaluation if operation array includes an operator
                if (signs.test(operationMemArray.join(''))) { 
                    equals(inputVal);
                } else {
                    return;
                }
                break;
            case 'add':
            case 'subtract':
            case 'divide':
            case 'multiply':
                lastInputCheck(inputVal);
                break;
        }
    } else {
        equalLastInputCheck();
        // ensures there are no leading zeros when a numberEntry is initiated
        if (inputVal === '0' && lastInputVal === '') {
            inputVal = '';
            return;
        } else {
            // Logs the digit input into the numberEntry
            logDigit(inputVal);
        }
    }
    // updates the last input entered for reference
    lastInputVal = inputVal;
}

// DOM EVENT LISTENTERS //
window.onload = function () {
    document.getElementById("clickable").addEventListener("click", actionInput, false);
}

