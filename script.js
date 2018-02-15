

function displayInput() {
    document.getElementById("inputs").innerHTML = memory;
    document.getElementById("operation-string").innerHTML = operationMemArray.join('');
} 

function actionInput(input) {
    let inputVal = input.target.value;
    let inputID = input.target.id;
}

  // three variable
  // var state of number = starts at +
  // var number = starts at 0  - store as a string instead as an array
  // var acummulator =  starts at 0  
  // var operation = sign  (start a null)
  // all operator cause an action

   // number button - initialise all number with zero. Append to end current displayed number else start new number
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

    //jasmine - mocha - jest
    //NtN - unit test vs code  - ActionInput function 
}

// DOM EVENT LISTENTERS //
window.onload = function () {
    document.getElementById("clickable").addEventListener("click", actionInput, false);
}



 // let operation = operationMemArray.join('') - constructor function 
 // let doMath = Function('return ' + operation)();