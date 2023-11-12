// src/calculator.ts

export interface CalculatorInput {
    num1: number;
    num2: number;
    operation: string;
  }
  
  export interface CalculatorOutput {
    input: CalculatorInput;
    result: number;
  }
  
  export function addNumbers(input: CalculatorInput): CalculatorOutput {
    const result = input.num1 + input.num2;
    const output: CalculatorOutput = {
      input,
      result,
    };
    return output;
  }
  
  export function subtractNumbers(input: CalculatorInput): CalculatorOutput {
    const result = input.num1 - input.num2;
    const output: CalculatorOutput = {
      input,
      result,
    };
    return output;
  }
  
  export function multiplyNumbers(input: CalculatorInput): CalculatorOutput {
    const result = input.num1 * input.num2;
    const output: CalculatorOutput = {
      input,
      result,
    };
    return output;
  }
  
  export function divideNumbers(input: CalculatorInput): CalculatorOutput {
    const result = input.num1 / input.num2;
    const output: CalculatorOutput = {
      input,
      result,
    };
    return output;
  }
  