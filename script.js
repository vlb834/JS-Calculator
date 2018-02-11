
let memoryArray = []; // 0123456789.
let memory = memoryArray.join(''); // to display

// DISPLAY
function displayInput() {
    console.log(memory);
    let displayMem = Number(memory);
    // .toFixed(8);
    document.getElementById("inputs").innerHTML = displayMem;
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
    if (inputVal === "." && memoryArray.includes('.') === false) {
        memoryArray.push(inputVal);
    } else if (inputVal === "." && memoryArray.includes('.') === true) {
        return;
    } else {
        memoryArray.push(Number(inputVal));
    }
    memory = memoryArray.join('');
    displayInput();
}

function clearEntry() {
    memoryArray.pop();
    memory = memoryArray.join('');
    displayInput();
}

function allClear() {
    memoryArray = [];
    memory = memoryArray.join('');
    displayInput();
}

function donada() {
    return NaN;
}
// function add(memory) {
//   return function(newMemory) {
//     memory + newMemory
//   }
// }

// DOM EVENT LISTENTERS // 
window.onload = function () {
    document.getElementById("AC").addEventListener("click", allClear, false);
    document.getElementById("CE").addEventListener("click", clearEntry, false);
    document.getElementById("numbers").addEventListener("click", logInput, false);
    document.getElementById("percent").addEventListener("click", percent, false);
    document.getElementById("pos-neg").addEventListener("click", toggleSign, false);
    document.getElementById("divide").addEventListener("click", donada, false);
    document.getElementById("multiply").addEventListener("click", donada, false);
    document.getElementById("subtract").addEventListener("click", donada, false);
    document.getElementById("add").addEventListener("click", donada, false);
}

