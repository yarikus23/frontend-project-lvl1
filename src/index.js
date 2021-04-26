/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const userName = getUserName();
const getDialog = (array) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${array[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) === String(array[i][1])) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${array[i][1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default getDialog;
