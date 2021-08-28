//==========Types of Conversion===========


// Number
let str = ' 123   ';
// str = Number(str);
// str = +str;
str = parseInt(str);

console.log(typeof str);
console.log(str);

str = 'one';
str = Number(str);
console.log(str);


str = null;
str = Number(str);
console.log(str);

str = true;
console.log(+str);
console.log(parseInt(str));

str = undefined;
console.log('---------------');
console.log(+str);
console.log(parseInt(str));

// String=====================
let value = true;
console.log('================');
console.log(typeof value);


value = String(value); //value = '' + value;

console.log(typeof value);

//false-> 'false', null-> 'null', undefinde-> 'undefinde', 123-> '123'

//=======================================
// Boolean
console.log('=========================');
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));
console.log(Boolean('hello!'));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));


//=======================Comparison operators=========== операторы сравнения

//a > b, a < b
//a >= b, a <= b
//a == b, a === b - строгое сравнение
//!= не равно

console.log('=========================')
console.log(5 < 3);
console.log(5 != 3);


let isBigger = 5 > 4;
console.log('isBigger: ' + isBigger);

console.log('=========================')
console.log('a' > 'q');
console.log('cat' > 'cad');
console.log('cat' > 'cats');
console.log('cat' > 'Cat');
console.log('ABC' == 'BCA');

console.log('==================================');
console.log('2' > 1);


let num1 = 42;
let num2 = '42';
console.log(num1 == num2);
console.log(num1 === num2);

num1 = 0;
str = '';
let result = false;

console.log(num1 == result);

console.log(null == undefined);


console.log('==================================');

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// =========Conditional operators=======================


//if, if else,  ?

// num1 = +prompt('enter number');
// num2 = +prompt('enter second number');

// if (num1 > num2) {
//     var max = num1;
//     alert('Max number is: ' +max)
// } else if (num1 === num2) {
//     alert('numbers are equal');
// }
// else if(num2 > num1) {
//     max = num2;
//     alert('Max number is: ' + max);
// }

// alert('Programm ended')

let max = num1;
// if (num1 < num2) {
//     max = num2;
// }
if (!num1 > num2) {
    max = num2;
}

// alert('Max number is: ' + max);

if (0) {
    console.log('Hello!')
}

let isFieldChecked = true;
if (isFieldChecked) {
    console.log('field is checked');
}
// if (isFieldChecked)  console.log('field is checked'); так тоже можно писать без скобок, если оно условие 


// let isAccessAllowed;
// let age = +prompt('enter your age, please');

// if (age >= 18) {
//     isAccessAllowed= true;
// } else {
//     isAccessAllowed = false;
// }

// isAccessAllowed = (age >= 18) ? true : false;
//alert(isAccessAllowed);

// if (age <= 3) {
//     alert('Hi, small one!');
// } else if (age <= 20) {
//     alert('Hi, middle one');
// } else if (age <= 100) {
//     alert('Hello madam or sir!');
// } else {
//     alert('Hello, lucky one!')
// }

// let message = (age <= 3) ? 'Hi, small one!' : (age <= 20) ? 'Hi, middle one' : (age <= 100) ? 'Hello madam or sir!' : 'Hello, lucky one!';

//alert(message);

// Switch======================

// switch (x) {
//     case 1:
//         alert('Hello!'); //if (x === 1)
//     case 2:
//         alert('Good bye!'); // if (x === 2)
//     default:
//         alert('nice to meet you!');
    
// }

let sumNummer = +prompt('2 + 2 = ?');
// switch (sumNummer) {
//     case 3:
//         alert('too little');
//         break
//     case 5:
//         alert('too much');
//         break
//     case 4:
//         alert('bingo');
//         break
//     default:
//         alert('try again!');
// }
switch (sumNummer) {
    case 2:
    case 3:
    case 5:
        alert('Wrong answear, try again');
        break
    case 4:
        alert('Bing!');
        break;
    default:
        alert('Try, again!');
}

// let userName = prompt('enter your name');
// switch (userName) {
//     case 'Lena':
//         alert('Hi, Lena');
//         break
//     case 'Vasya':
//         alert('Hi, Vasya');
//         break
//     default:
//         alert("I don't know you!")
// }

//================Logical operators=======

// || -> пайп or (или), &&->  and (и), !-> not (не)

let hour = 11;
if (hour < 10 || hour > 18) {  
    console.log('shop is closed')
}
//false || false => false,  
// false|| true => true! 
// false|| treu=> true
//true||treu => true

hour = 12;
let minute = 30;
if (hour === 12 && minute === 30) {
    console.log('The time is 12:30');
}
//false && false => false 
//false && true => false 
//false && true => false
//true  && true => true

console.log(isFieldChecked);
console.log(!isFieldChecked);


//===========Confirm=======
let isWeekend = confirm('Is a weekwnd now?');
alert(isWeekend);