import makeRandom from '../random.js';

const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRoundGenerator = () => {
  const firstNum = makeRandom(20, 1);
  const secondNum = makeRandom(20, 1);
  const operation = makeRandom(operations.length, 1);
  const question = `${firstNum} ${operations[operation]} ${secondNum}`;
  let correctAnswer;
  switch (operations[operation]) {
    case '+':
      correctAnswer = (firstNum + secondNum);
      break;
    case '-':
      correctAnswer = (firstNum - secondNum);
      break;
    case '*':
      correctAnswer = (firstNum * secondNum);
      break;
    default:
      break;
  }
  return [question, correctAnswer];
};
export { rules, getRoundGenerator };