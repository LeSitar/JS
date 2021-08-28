// const numbers = [];

// let arr = new Array(4);

// console.log(arr);
// arr.push(2);
// console.log(arr);

// for (let i = 0; i < 4; i++){
//     arr[i] = 1;
// }

// numbers.length = 5;

// ===========================================Домашка======= переписать два нижних действия при помощи функций

//Сделать 5 случаных чисел до 100 в  массиве .

const numbers = [];
for (let i = 0; i < 5; i++){
    numbers[i] = parseInt(Math.random() * 100);
    //let randomNumbers = parseInt(Math.random() * 100);
    //numbers.push(randomNumbers);
}
// console.log(numbers);

alert(`Remember numbers and orders\n ${numbers}`);
let userAnswer = +prompt('What is first number?');
if (userAnswer === numbers[0]) {
    alert('You right!!!')
} else {
    alert(`Wrong answer, right number is ${numbers[0]}`);
}

userAnswer = +prompt('What is last number?');
if (userAnswer === numbers[numbers.length-1]) {
    alert('You right!!!')
} else {
    alert(`Wrong answer, right number is ${numbers[numbers.length-1]}`);
}

let randomIndex = parseInt(Math.random() * numbers.length);

userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);
if (userAnswer === numbers[randomIndex]) {
    alert('You right!!!')
} else {
    alert(`Wrong answer, right number is ${numbers[randomIndex]}`);
}

// Task 2
/*
function powerNumber(3,3) --> 27
powerNumber(5,3)--->125
*/

// Task3
/*
const numbers= [2,4,6,10,12];
function sumNumbers(numbers) -->34;
*/

// Task04*
/*
const numbers= [1,2,3,4,5];
function reversArra(number) --> [5, 4, 3, 2, 1];
*/