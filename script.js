
let memoryArray = []; // 0123456789.
let memory = memoryArray.join('') // to display

// POSITIVE NEGATIVE NUMBER
const positive = () => Math.abs(memory);
const negative = () => memory * -1;
function toggleSign() {
    if (Math.sign(memory) === 1) {
        return memory = negative(memory);
        console.log(memory);
    } else if (Math.sign(memory) === -1) {
        return memory = positive(memory);
        console.log(memory);
    } else if (Math.sign(memory) === 0) {
        return memory;
    }
}
// PERCENT
function percent() { return memory = memory / 100; }

// LOG INPUT INTO MEMORY ARRAY
function logInput(input) {
    console.log(input);
    let inputVal = input.target.value
    if (inputVal === ".") {
        memoryArray.push(inputVal);
        memory = memoryArray // why do I need this here? global definiation not good enough? 
        console.log(memory);
    } else { //// test for only one decimal!!! 
        memoryArray.push(Number(inputVal));
        memory = memoryArray.join('') // why do I need this here? global definiation not good enough? 
        console.log(memory);
    }
}

function clearEntry() {
    memoryArray.pop();
    memory = memoryArray.join('')
    console.log(memory);
}
function allClear() {
    console.log(memoryArray, memory);
    memoryArray = [];
    memory = memoryArray.join('')
    console.log(memory);
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
    document.getElementById("digit").addEventListener("click", logInput, false);
    document.getElementById("percent").addEventListener("click", percent, false);
    document.getElementById("pos-neg").addEventListener("click", toggleSign, false);
    document.getElementById("divide").addEventListener("click", donada, false);
    document.getElementById("multiply").addEventListener("click", donada, false);
    document.getElementById("subtract").addEventListener("click", donada, false);
    document.getElementById("add").addEventListener("click", donada, false);
}

