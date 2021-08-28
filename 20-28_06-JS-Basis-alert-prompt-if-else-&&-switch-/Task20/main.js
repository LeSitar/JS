// Task01 
// Запросить два числа, посчитать их сумму.
// если, полученная сумма меньше 10 - вывести сообщение: "сумма слишком маленькая"
// если сумма больше 10 - вывести сообщение: "сумма слишком большая"
// если сумма равна 10 - "бинго!"
// выполнить задание с использованием if и с использованием тернарного оператора (?)

// Task 01
let num1 = +prompt('Enter the first number');
let num2 = +prompt('Enter the second number');
let sum = num1 + num2;
alert(sum);
if (sum < 10) {
    alert('the amount is too small');
} else if (sum > 10) {
    alert('the amount is too big');
} else if (sum === 10) {
    alert('Bingo!');
}
// Task 01 with "?" operator
let message = (sum < 10) ? 'the amount is too small' : (sum > 10) ? 'the amount is too big' : (sum === 10) ? 'Bingo!' : '';
console.log(message);

//Task 1 from teacher
// const number1 = +prompt('enter number one');
// const number2 = +prompt('enter number two');
// const summe = number1 + number2;
// let message;
// if (summe > 10) {
//     message='to big summe'
// } else if (summe < 10) {
//     message= 'to small summe'
// } else {
//     message = 'bingo!'
// }
// alert(message);

// Task 01 with "?" operator
// const message = (summe > 10) ? 'to big summe' : (summe < 10) ? 'to small summe' : 'bingo!';




// Task 02
// let login = prompt('Enter your login');
// if (login === 'employee') {
//     alert('Hi employee!');
// }
// else if (login === 'boss') {
//     alert('"Hello boss"');
// }
// else if (login ==='') {
//     alert('no login');
// }
// else {
//     alert('Hi user');
// }

// switch (login) {
//     case'boss':
//         alert('"Hello boss"');
//         break
//     case 'employee':
//         alert('Hi employee!');
//         break
//     case '':
//         alert('no login');
//         break
//     default:
//         alert('Hi user')
// }


// Task02 
// Запросить у пользователя логин.
// если логин равен "employee" , вывести сообщение: "Hi employee!"
// если логин - "boss", вывести сообщение: "Hello boss!"
// если логин пустой - "no login"
// во всех остальных случаях - "Hi user"
// выполнить задание с использованием if и с использованием switch

// Task 2 from teacher
let newMessage = 'Hi ';
const login =String( prompt('enter your login'));
// if (login === 'employee' || login === 'Employee') {
//     newMessage = newMessage + login + '!'; //newMessage += login +'!'
// } else if (login === 'boss') {
//     newMessage = 'Hello boss!';
// } else if (login === '' || login == null) {
//     ;
//     newMessage ='no login'
// } else {
//     newMessage += 'user';
// }

switch (login) {
    case 'employee':
        newMessage += login + '!';
        break;
    case 'boss':
        newMessage = 'Hello boss!';
        break
    case 'null':
    case '':
        newMessage = 'no login';
        break
    default:
        newMessage += 'user!';
}


alert(newMessage);



// Task 3
// let age = +prompt('Enter your age');
// if (age >= 14 && age <= 90) {
//     alert('the variable age is located in the range between 14 and 90 inclusive');
// }
// else {
//     alert('variable age is not found in the range from 14 to 90 inclusive');
// }

// age = +prompt('Enter your age for check');
// if (age > 13 && age <=90) {
//     alert('the variable age is located in the range between 14 and 90 inclusive');
// }
// else {
//     alert('variable age is not found in the range from 14 to 90 inclusive');
// }
// age = +prompt('Введите ваш возраст');
// if (age >= 14 && age <= 90) {
//     alert('Ваш возраст в диапозоне от 14 до 90');
// }
// else {
//     alert('Ваш возраст вне диапозона от 14 до 90')
// }

// Task03 
// Напишите условие if для проверки, что переменная age находится 
// в диапазоне между 14 и 90 включительно.

// Напишите условие if для проверки, что переменная age НЕ находится 
// в диапазоне между 14 и 90 не включительно. Напишите два варианта решения.

// Task 3 from teacher

let age = 30;
if (age >= 14 && age <= 90) {
    console.log('access allowed');
}

if (age <14 || age > 90) {
    console.log('access denied')
}

if (!(age >= 14 && age <= 90)) {
    console.log('one more denied');
}