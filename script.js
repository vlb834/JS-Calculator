
let memoryArray = []; // 0123456789.
let memory = Number(memoryArray.join('')); // to display
let operationMemArray = [];
//let operation = Number(operationMemArray.join('')); // to display

// DISPLAY
function displayInput() {
    document.getElementById("inputs").innerHTML = memory;
    document.getElementById("operation-string").innerHTML = operationMemArray.join('');
} 

// POSITIVE NEGATIVE 
function toggleSign() {
    memory = memory * -1
    displayInput();
}
// PERCENT
function percent() { 
    memory = memory / 100;
    displayInput(); 
}

// LOG INPUT INTO MEMORY ARRAY
function logInput(input) {
    let inputVal = input.target.value
   // if (memory.length < 10) {
        if (inputVal === "." && memoryArray.includes('.') === false) {
            memoryArray.push(inputVal);
        } else if (inputVal === "." && memoryArray.includes('.') === true) {
            return;
        } else {
            memoryArray.push(Number(inputVal));
        }
        memory =  Number(memoryArray.join(''));
        displayInput();
    } //else {
     //   alert ("MAX DISPLAY LENGTH REACHED (try using a proper calculator!)")
   // }
//}

function clearEntry() {
    memoryArray.pop();
    memory = Number(memoryArray.join(''));
    displayInput();
}

function allClear() {
    memoryArray = [];
    memory = Number(memoryArray.join(''));
    displayInput();
}

function donada() {
    return NaN;
}
function operation(input) {
    let inputSign = input.target.value
    operationMemArray.push(memory);
    operationMemArray.push(inputSign);
    memoryArray = [];
    console.log("op", operationMemArray);
}

function execute() {
    operationMemArray.push(memory);
    memoryArray = [];
    console.log(operationMemArray.join(''));
    return function() {
        let total = operationMemArray.join('');
        return total();
    }
}

// DOM EVENT LISTENTERS // 
window.onload = function () {
    document.getElementById("AC").addEventListener("click", allClear, false);
    document.getElementById("CE").addEventListener("click", clearEntry, false);
    document.getElementById("numbers").addEventListener("click", logInput, false);
    document.getElementById("percent").addEventListener("click", percent, false);
    document.getElementById("pos-neg").addEventListener("click", toggleSign, false);
    document.getElementById("divide").addEventListener("click", operation, false);
    document.getElementById("multiply").addEventListener("click", operation, false);
    document.getElementById("subtract").addEventListener("click", operation, false);
    document.getElementById("add").addEventListener("click", operation, false);
    document.getElementById("equal").addEventListener("click", execute, false);

}

