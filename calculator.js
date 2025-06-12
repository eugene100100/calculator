function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "Invalid";
  return a / b;
}



let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  } 
}

let displayValue = '';
let chosenOperator = '';
let firstNumber = '';
let secondNumber = '';

function appendToDisplay(value) {
  if (chosenOperator === '') {
    let len = displayValue.length;
    switch (displayValue[len - 1]) {
      case '+':
        chosenOperator = '+';
        firstNumber = displayValue.slice(0, -1);
        break;
      case '-':
        chosenOperator = '-';
        firstNumber = displayValue.slice(0, -1);
        break;
      case '*':
        chosenOperator = '*';
        firstNumber = displayValue.slice(0, -1);
        break;
      case '/':
        chosenOperator = '/';
        firstNumber = displayValue.slice(0, -1);
        break;
      default:
        break;
    }
  }
  displayValue += value;
  document.querySelector("#display").innerHTML = displayValue;
}

function calculate() {
  let operatorIndex = 0;
  for (let i = 0; i < displayValue.length; i++) {
    if (displayValue[i] === "+" || displayValue[i] === "-" || displayValue[i] === "*" || displayValue[i] === "/") {
      operatorIndex = i;
    }
  }
  secondNumber = displayValue.slice(operatorIndex + 1);
  if (operatorIndex !== 0 && secondNumber !== '') {
    let result = operate(chosenOperator, Number(firstNumber), Number(secondNumber));
    document.querySelector("#display").innerHTML = result.toString();

    displayValue = result.toString();
    chosenOperator = '';
    firstNumber = '';
    secondNumber = '';
  }
}

function clearDisplay() {
  document.querySelector("#display").innerHTML = '';
  displayValue = '';
  chosenOperator = '';
  firstNumber = '';
  secondNumber = '';
}
