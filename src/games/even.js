/* eslint-disable no-console */
/* eslint-disable import/extensions */
import getRandomNum from '../getRandomNum.js';
import getDialog from '../index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getExtension = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let result;
    const checkNum = getRandomNum(0, 100);
    if (checkNum % 2 === 0) {
      result = 'yes';
    } else result = 'no';
    const ask = `${checkNum}`;
    array.push([ask, result]);
  }
  return array;
};

const execute = () => {
  getDialog(getExtension());
};

export default execute;
