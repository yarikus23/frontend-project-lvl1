/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getRandomNum from '../getRandomNum.js';
import getDialog from '../index.js';

console.log('What number is missing in the progression?');
const getExtension = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let result;
    const progressionLength = getRandomNum(5, 11);
    let currentElement = getRandomNum(0, 100);
    const step = getRandomNum(0, 11);
    const arifmProgression = [currentElement];
    let ask = '';
    const hiddenElement = '.. ';
    for (let j = 0; j < progressionLength - 1; j += 1) {
      currentElement += step;
      arifmProgression.push(currentElement);
    }
    const hiddenElementNum = getRandomNum(0, arifmProgression.length);
    for (let k = 0; k < arifmProgression.length; k += 1) {
      if (k === hiddenElementNum) {
        ask += hiddenElement;
        result = arifmProgression[k];
      } else {
        ask += `${arifmProgression[k]} `;
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
