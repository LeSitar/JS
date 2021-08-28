//Number

let billion = 1e9   //1000000000; *e  сколько нулей нужно
let billion1 = 7.3e9 // 7300000000
let ms = 1e-6 //0.000001
let ms1 = 3e-3 // 0.003
let ms2= 1+3e-3 //1.003

console.log(billion);
console.log(billion1);
console.log(ms);
console.log(ms1);
console.log(ms2);


console.log('======================');

console.log(0xff); //255    // 0 1 2 3 4 5 6 7 8 9 1 a b c   16ти значная система 
console.log(0b11111111); //01 10 11 100    двоичная система 
console.log(0o377); // 1 2 3  4 5 6 7 8   8сми значная система 

let num = 255;
console.log(num.toString(16)); // поставить скоби у метода обязательно (16)  система измерения 16значная //ff

Math.randomRangeArray = function (arraySize, numberRange) {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(parseInt(Math.random() * numberRange));
    }
    return array;
}

const arr = Math.randomRangeArray(4, 125);
console.log(arr);

let sum = 0.1 + 0.2; ///0.30000000000000004
console.log(sum);


console.log(9999999999999999); //10000000000000000

console.log(123456..toString(2)); //в таком случае, если хотим перевести в  строку, ставим  2 точки 

console.log(12.2345.toFixed(2)); //12.23

num = '22.24.23 px';
console.log(typeof num);
// num = Number(num);
num = parseInt(num);
console.log(typeof num);

console.log(num);

num = 'ff';
console.log(parseInt(num, 16));// 255


console.log(1.35.toFixed(1));
console.log(6.35.toFixed(1));


function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min +1));
}

//((max +0.5) - (min- 0.5))  -> max + 0.5- min+0.5->
num = randomInteger(1, 3);
console.log(num);

//Math.flor->  3.1  матх округляет в меньшую сторону - получим 3
//Math.ceil -> 3.1 = 4.0 округляет в большую сторону
//Math.round -> 3.1 => 3.0; 3.6=> 4.0
//Math.trunc -> 3.1 => 3.0, 3.7=> 3.0


// ==============================================
const person = {
    name: 'Vasia',
    age: 32,
    isMarried: true,
    say: function () {
        console.log('Hello!')
    }
}

person.say();
// =================================================