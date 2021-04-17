/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNum = () => {
  const randomNum = Math.floor(Math.random() * 100);
  return randomNum;
};

for (let i = 0; i < 3; i += 1) {
  const checkNum = getRandomNum();
  console.log(`Question: ${checkNum}`);
  let evenNumber;
  if (checkNum % 2 === 0) {
    evenNumber = true;
  } else evenNumber = false;
  const inquiry = readlineSync.question('Your answer: ');
  if (evenNumber === true) {
    if (inquiry === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`'${inquiry}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (evenNumber === false) {
    if (inquiry === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${inquiry}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
