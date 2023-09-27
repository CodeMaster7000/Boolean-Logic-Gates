const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// NOT gate
function notGate(input) {
  return !input;
}

// AND gate
function andGate(input1, input2) {
  return input1 && input2;
}

// OR gate
function orGate(input1, input2) {
  return input1 || input2;
}

// XOR gate
function xorGate(input1, input2) {
  return (input1 || input2) && !(input1 && input2);
}

// NAND gate
function nandGate(input1, input2) {
  return !(input1 && input2);
}

// NOR gate
function norGate(input1, input2) {
  return !(input1 || input2);
}

// XNOR gate
function xnorGate(input1, input2) {
  return (input1 && input2) || (!input1 && !input2);
}

function getUserInput(promptMessage, callback) {
  rl.question(promptMessage, (userInput) => {
    const inputValue = userInput.trim().toLowerCase() === 'true';
    callback(inputValue);
  });
}

getUserInput('Input A (true/false): ', (inputA) => {
  getUserInput('Input B (true/false): ', (inputB) => {
    console.log(`NOT(${inputA}) = ${notGate(inputA)}`);
    console.log(`AND(${inputA}, ${inputB}) = ${andGate(inputA, inputB)}`);
    console.log(`OR(${inputA}, ${inputB}) = ${orGate(inputA, inputB)}`);
    console.log(`XOR(${inputA}, ${inputB}) = ${xorGate(inputA, inputB)}`);
    console.log(`NAND(${inputA}, ${inputB}) = ${nandGate(inputA, inputB)}`);
    console.log(`NOR(${inputA}, ${inputB}) = ${norGate(inputA, inputB)}`);
    console.log(`XNOR(${inputA}, ${inputB}) = ${xnorGate(inputA, inputB)}`);
    
    rl.close();
  });
});
