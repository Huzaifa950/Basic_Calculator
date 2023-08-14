        // ********************         For Better Understanding --> Read the Comments        *********************************//


document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  let currentInput = "";
  let currentOperator = "";
  let result = 0;
  
  // update --> display of calculator
  updateDisplay=()=> {                                          // Arrow Func               
    display.textContent = currentInput;
  }
  
  // update --> numbers on display of calc
  function handleNumberClick(event) {
    const number = event.target.textContent;
    currentInput += number;
    updateDisplay();                                          // Call Back Func
  }
  
  // update --> operators on display of calc
  function handleOperatorClick(event) {
    currentOperator = event.target.textContent;
    result = parseFloat(currentInput);
    currentInput = "";
  }
  
  // This block calculates and print desired result
  function handleEqualsClick() {
    if (currentOperator === "+") {
      result += parseFloat(currentInput);
    } else if (currentOperator === "-") {
      result -= parseFloat(currentInput);
    } else if (currentOperator === "*") {
      result *= parseFloat(currentInput);
    } else if (currentOperator === "/") {
      result /= parseFloat(currentInput);
    }
  
    currentInput = result.toString();
    currentOperator = "";
    updateDisplay();                                        // Call Back Func
  }
  
  // Logic --> Display 0 on screen if nothing is entered
  function handleClearClick() {
    currentInput = "";
    currentOperator = "";
    result = 0;
    updateDisplay();
  }
  
  // Logic --> Only adds decimal if there is no decimal already in number 
  function handleDotClick() {
    if (!currentInput.includes(".")) {
      currentInput += ".";
      updateDisplay();
    }
  }
  
  // Add event listeners to number buttons
  const numberButtons = document.querySelectorAll(".btn:not(#clear):not(#equals):not(#dot)");
  numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick);
  });
  
  // Add event listeners to operator buttons
  const operatorButtons = document.querySelectorAll("#add, #subtract, #multiply, #divide");
  operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick);
  });
  
  // Add event listener to equals button
  document.getElementById("equals").addEventListener("click", handleEqualsClick);
  
  // Add event listener to clear button
  document.getElementById("clear").addEventListener("click", handleClearClick);
  
  // Add event listener to dot button
  document.getElementById("dot").addEventListener("click", handleDotClick);
});
  