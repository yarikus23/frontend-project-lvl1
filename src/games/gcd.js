/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getRandomNum from '../getRandomNum.js';
import getDialog from '../index.js';

console.log('Find the greatest common divisor of given numbers.');
const getExtension = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let result;
    let fewerNum;
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    const ask = `${firstNum} ${secondNum}`;
    if (firstNum < secondNum) {
      fewerNum = firstNum;
    } else {
      fewerNum = secondNum;
    }
    for (let j = fewerNum; j > 0; j -= 1) {
      if (firstNum % j === 0 && secondNum % j === 0) {
        result = j;
        break;
      }
    }
    array.push([ask, result]);
  }
  return array;
};

const execute = () => {
  getDialog(getExtension());
};

export default execute;
