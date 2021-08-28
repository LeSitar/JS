
Task01


const numbers = [];
let userAnswer, randomIndex;


userAnswer = +prompt('What is first number?');
checkNumbers(userAnswer,0)

userAnswer = +prompt('What is last number?');
checkNumbers(userAnswer, numbers.length-1)

randomIndex = parseInt(Math.random() * numbers.length);
userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);
checkNumbers(userAnswer, randomIndex)


function generateNumbers() {
    for (let i = 0; i < 5; i++) {
    numbers[i] = parseInt(Math.random() * 100);
}
console.log(numbers);
alert(`Remember numbers and orders\n ${numbers}`);
}

function checkNumbers(userNumber, index) {
    if (userNumber === numbers[index]) {
        alert('You right!!!')
    } else { `Wrong answer, right number is ${numbers[index]}`
    }
}




// const firstAnswer = getUserAnswer(1);
// checkAnswer(numbers[0], firstAnswer);
// const secondAnswer = getUserAnswer(numbers.length);
// checkAnswer(numbers[numbers.length - 1], secondAnswer);
// const thirdAnswer = getUserAnswer(randomIndex + 1);
// checkAnswer(numbers[randomIndex, thirdAnswer]);
let checkError = true;
startGame();
function startGame() {
    let repeat = true;
    while (repeat) {
        const numbers = fillArrayRandomNumbers(5, 100);
        const randomIndex = getRandomRangeNumber(numbers.length);
        const maxQuestions = 3;
        checkError = 'true';
        showMessage(numbers);
        for (i = 0; i < maxQuestions; i++) {
            const randomIndex = getRandomRangeNumber(numbers.length);
            const userAnswer = getUserAnswer(randomIndex + 1);
            checkAnswer(numbers[randomIndex], userAnswer);
        }
        if (checkError) {
            alert('You have a great memory!')
        }
        repeat = confirm('One more time?')
    }
}

function getRandomRangeNumber(range) {
    return parseInt(Math.random() * range);
}

function fillArrayRandomNumbers(length, range) {
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(getRandomRangeNumber(range));
    }
    return array;
}

function showMessage(number) {
    alert(`Remember numbers and orders\n ${number}`);
}
function getUserAnswer(number) {
    return +prompt(`What was the ${number} number?`)
}

function checkAnswer(number, userAnswer) {
    if (userAnswer === number) {
        alert('You right!!!')
        return true;
    } else {
        alert(`Wrong answer, right number is ${number}`);
        checkError = false;
    }
}




// Task 2
/*
function powerNumber(3,3) --> 27
powerNumber(5,3)--->125
*/
// function powerNumber(a, b) {
//     let sum = a ** b;
//     return sum;
// }
// console.log(powerNumber(3, 3));
// console.log(powerNumber(5, 3));

// const power = (a, b) => a ** b;
// console.log(power(3, 3));

// function powerNumber(number, power) {
//     let result = 1;
//     for (let i = 0; i < power; i++){
//         result *= number;
//     }
//     return result;
// }
// console.log(powerNumber(5, 3));


// Task3
/*
const numbers= [2,4,6,10,12];
function sumNumbers(numbers) -->34;
*/

// const numbers = [2, 4, 6, 10, 12].reduce(function sumNumbers(a, b) {
//     return a + b
// })
// console.log(numbers);

// const numbers = [2, 4, 6, 10, 12];
// function sumArrayNumbers(array) {
//     let sum = 0;
//     for (let number of array) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(sumArrayNumbers(numbers));




// Task04*
/*
const numbers= [1,2,3,4,5];
function reversArra(number) --> [5, 4, 3, 2, 1];
*/
// [1] [2] [3] [4] [5]   [5] [4] [3] [2] [1]
// numbers= [1,2,3,4,5,6];

// function reverseArray(array) {
//     for (let i = 0; i < array.length / 2; i++){
//         const temp = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = temp;
//     }
// }
// console.log(numbers);
// reverseArray(numbers);
// console.log(numbers);




// let reverse = function (a) {
//     for (let i = 0, j = a.length - 1; i < j;)
//         a[i] = a[j] + (a[j--] = a[i++], 0)
//     return a;
// }
