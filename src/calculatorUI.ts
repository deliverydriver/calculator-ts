import { CalculatorInput, CalculatorOutput, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./calculator";
export function getUserInput(): CalculatorInput {
  const num1String = prompt("Enter the first number:");
  const num2String = prompt("Enter the second number:");
  const operation = prompt("Enter the operation (add, subtract, multiply, divide):");
  const num1 = num1String !== null ? parseFloat(num1String) : NaN;
  const num2 = num2String !== null ? parseFloat(num2String) : NaN;
  return { num1, num2, operation: operation || "" };
}
export function displayResult(result: CalculatorOutput): void {
  if (!isNaN(result.result)) {
    console.log(`Result of ${result.input.num1} ${result.input.operation} ${result.input.num2}: ${result.result}`);
  } else {
    console.log("Error: Cannot divide by zero.");
  }
}
