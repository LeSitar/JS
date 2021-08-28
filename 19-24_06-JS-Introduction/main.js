/* Comment example
in two line*/

//===============
// Variables
// ==============
var age = 25;
let message = 'hello from main-js!';
const PI = 3.14;
let news, titel, article;
const WHITE = 'white', RED = '#005577'

// Declaration
let userName;
// Initialisation
userName = 'Vasya';

message = 'hello world!';

console.log(message);
// alert('Good bye!');


console.log(message)

// naming

// good
let myName;  //  user_name
let message12;
let user12;
let $;
let _;

// bad
let имя;
let imya;
let ff44;

// can not use
// let 3name;
// let g& user;
// let let; 


// ==============
// Data types
// ==============

// Number

let userAge = 25;
let a = 12.56;

console.log(0.2 - 0.1);
console.log(0.3 - 0.2);

// alert(1 / 0);
// alert(-1 / 0);
// alert('one' / 1); (2+5) * 'one'  <--------NaN (Not a number)


// BigInt

// --------------------------
// String

let string1 = 'Hello!';
let string2 = " Vasya!";
let string3 = `Hello, `;
// alert(`Hello, ${string2}`);
// alert('Hello, ${string1}');

// alert(`summe 1 + 2 =${1 + 2}`);


// Boolean
let nameFieldChecked = true;
let isGreater = 4 < 1;

console.log(isGreater);

//-------------------------------
// Null
let year = null;
// let currentAge= prompt('enter your current age');
// console.log(currentAge);


//---------------------
// Undefind

let dog;
console.log(dog);

// ========-----
// Object, Symbol, Function


//-----------------------
let x = 12;
const MONTH = 'july';
let isWeekend = false;
let price = null;
let cat;
console.log('------------------');
console.log(typeof x);
console.log(typeof MONTH);
console.log(typeof isWeekend);
console.log(typeof price);
console.log(typeof cat);
console.log(typeof alert);

//--------------------------
// Operators
// ================
// операция присвоения =
let c = 5;
let b = 10;

// + - * / % binary operators % - остаток от деления

c = 5 % 3;
console.log(c);

let str1 = ' hello, ';
let str2 = 'world';
console.log(str1 + str2);
console.log(str1 + 5 + 6);
console.log(str1 + (5 + 6));

// unary operators

let counter = 5;
let newCounter = --counter;
console.log(counter);
console.log(newCounter);

console.log(2 * counter++);
console.log(counter);

// =====================
let num1 = prompt('enter number, please')
let num2 = prompt('enter second number, please')
let result = num1 * num2;
alert('Multiplication, result is: ' + result);

//  превратить в число  numb
num1 = parseInt(num1);
num2 = parseInt(num2);
result = num1 + num2;
alert('Summe is: ' + result)


