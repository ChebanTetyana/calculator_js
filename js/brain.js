
let firstOperand = "";
let secondOperand = "";
let currentOperation;
let previousOperation;
let result = "0";

const operationButtons = document.getElementsByClassName("calc__btn_operation");

const operations = {
  sum: "+",
  difference: "-",
  multiply: "*",
  division: "/",
  equals: "=",
};

function onOperationClick(event) {
  currentOperation = event.target.value;
  if (!previousOperation) {
    previousOperation = currentOperation;
  }

  if (currentOperation === operations.equals) {
    calculate();
  }
}

if (operationButtons) {
  for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", onOperationClick);
  }
}

const numberButtons = document.getElementsByClassName("calc__btn_number");

const onNumberClick = (event) => {
  if (currentOperation !== operations.equals && !previousOperation) {
    firstOperand += event.target.value;
    display.innerHTML = firstOperand;
  } else {
    secondOperand += event.target.value;
    display.innerHTML = secondOperand;
  }
};

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", onNumberClick);
}

const display = document.getElementById("result");

function sum(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function difference(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function division(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}

function calculate() {
  switch (previousOperation) {
    case operations.sum:
      result = sum(+firstOperand, +secondOperand);

      break;
    case operations.difference:
      result = difference(+firstOperand, +secondOperand);

      break;
    case operations.multiply:
      result = multiply(+firstOperand, +secondOperand);

      break;
    case operations.division:
      result = division(+firstOperand, +secondOperand);

      break;

    default:
      break;
  }
  display.innerHTML = result;
}

// пногодейстиве доделать и клеар
// секондоперанд пуста строка мае буть
