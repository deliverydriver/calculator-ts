import { getUserInput, displayResult } from "./calculatorUI";
import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./calculator";
const userInput = getUserInput();
switch (userInput.operation) {
  case "add":
    displayResult(addNumbers(userInput));
    break;
  case "subtract":
    displayResult(subtractNumbers(userInput));
    break;
  case "multiply":
    displayResult(multiplyNumbers(userInput));
    break;
  case "divide":
    displayResult(divideNumbers(userInput));
    break;
  default:
    console.error("Invalid operation. Please enter add, subtract, multiply, or divide.");
}
