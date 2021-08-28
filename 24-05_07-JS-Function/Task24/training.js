const numbers = [];
let userAnswer, randomIndex;

// generate random numbers
generateNumbers();

// 1 round
userAnswer = +prompt('What is first number?');
checkNumbers(userAnswer, 0);

// 2 round
userAnswer = +prompt('What is last number?');
checkNumbers(userAnswer, numbers.length - 1);

// 3 round 
randomIndex = parseInt(Math.random() * numbers.length);
userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);
checkNumbers(userAnswer, randomIndex);

// helper functions
function generateNumbers() {
  for (let i = 0; i < 5; i++) {
    numbers[i] = parseInt(Math.random() * 100);
  }
  console.log(numbers);
  alert(`Remember numbers and orders\n ${numbers}`);
};

function checkNumbers(userNumber, index) {
  if (userNumber === numbers[index]) {
    alert('You right!!!')
  } else {
    alert(`Wrong answer, right number is ${numbers[index]}`);
  }
}
