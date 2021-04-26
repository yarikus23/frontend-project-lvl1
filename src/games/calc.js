/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNum from '../getRandomNum.js';
import getDialog from '../index.js';

console.log('What is the result of the expression?');
const getExtension = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let result;
    const firstOperand = getRandomNum(100);
    const secondOperand = getRandomNum(100);
    const operations = ['+', '-', '*'];
    const currentOperation = operations[getRandomNum(3)];
    const ask = `${firstOperand} ${currentOperation} ${secondOperand}`;
    if (currentOperation === '+') {
      result = firstOperand + secondOperand;
    }
    if (currentOperation === '-') {
      result = firstOperand - secondOperand;
    }
    if (currentOperation === '*') {
      result = firstOperand * secondOperand;
    }
    array.push([ask, result]);
  }
  return array;
};

const execute = () => {
  getDialog(getExtension());
};

export default execute;
