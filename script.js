
let memoryArray = []; // 0123456789.
let memory = Number(memoryArray.join('')); // to display
let operationMemArray = [];

function displayInput() {
    document.getElementById("inputs").innerHTML = Number(memoryArray.join(''));
    document.getElementById("operation-string").innerHTML = operationMemArray.join('');
    console.log("memory", memory);
}
function operation(sign) {
    operationMemArray.push(memory);
    operationMemArray.push(sign);
    memoryArray = [];
    memory = Number(memoryArray.join(''));
    displayInput();
}

function execute() {
    operationMemArray.pop();
    memory = eval(operationMemArray.join(''));
   // let operation = operationMemArray.join('') - constructor function 
   // let doMath = Function('return ' + operation)();
    document.getElementById("inputs").innerHTML = memory;
    operationMemArray = [];
    console.log("memory", memory);
}
function actionInput(input) {
    let inputVal = input.target.value;
    let inputID = input.target.id;
    if (inputID) {
        switch (inputID) {
            case 'AC': memoryArray = []; operationMemArray = []; displayInput(); break;
            case 'CE': memoryArray.pop(); operationMemArray.pop(); displayInput(); break;
            case 'percent': memory = memory / 100; displayInput(); break;
            case 'pos-neg': memory = memory * -1; displayInput(); break;
            case 'divide': operation(inputVal); break;
            case 'multiply': operation(inputVal); break;
            case 'subtract': operation(inputVal); break;
            case 'add': operation(inputVal); break;
            case 'equal': operation(inputVal); execute(); break;
        }
    } else {
        if (inputVal === "." && memoryArray.includes('.') === false) {
            memoryArray.push(inputVal);
        } else if (inputVal === "." && memoryArray.includes('.') === true) {
            return;
        } else {
            memoryArray.push(Number(inputVal));
        }
        memory = Number(memoryArray.join(''));
        displayInput();
    }
}

// DOM EVENT LISTENTERS //
window.onload = function () {
    document.getElementById("clickable").addEventListener("click", actionInput, false);
}

