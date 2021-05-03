/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getRandomNum from '../getRandomNum.js';
import getDialog from '../index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const getExtension = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let result = 'yes';
    const checkNum = getRandomNum(0, 100);
    if (checkNum < 2) {
      result = 'no';
    }
    for (let j = 2; j < checkNum; j += 1) {
      if (checkNum % j === 0) {
        result = 'no';
        break;
      }
    }
    const ask = `${checkNum}`;
    array.push([ask, result]);
  }
  return array;
};

const execute = () => {
  getDialog(getExtension());
};

export default execute;
