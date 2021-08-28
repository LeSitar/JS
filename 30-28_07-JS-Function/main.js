function showMessage(from, text) {
    if (text === undefined) {
        text= 'text not added'
    }
    console.log(`${from}: ${text}`)
}

showMessage('Vasya', 'Nice to meet you!'); //Vasya: Nice to meet you!
showMessage('Vasya'); //Vasya: text not added
showMessage() //no name: empty text
// ==================================
function showMessage(from= 'no name', text= 'empty text') {

    console.log(`${from}: ${text}`)
}
showMessage('Vasya', 'Nice to meet you!');//Vasya: Nice to meet you!
showMessage('Vasya'); //Vasya: empty text
showMessage();//no name: empty text


function calc(a = 2, b = 3) {
    return a + b;
}
console.log(calc());//5
console.log(calc(5));//8 тут взял параметр по умолчаеию в  функции т.е. 3
console.log(calc(4, 5));//9

console.log('===================');

//======================= Array Destructurisation

const arrayName = ['Vasya', 'Peter','Driver'];
let [firstName, lastName, profession] = arrayName;
console.log(lastName);  //Peter
console.log(arrayName);//["Vasya", "Peter"]
console.log(firstName);//Vasya

lastName = lastName.toUpperCase();
console.log(lastName);//PETER
console.log(profession);//Driver

// =================================

let [red, black, ...colors] = ['red', 'black', 'yellow', 'green', 'white']; //...colors всё оставшиеся запишется в колорс
console.log(colors); //["yellow", "green", "white"]

let [firstName1, lastName1] = [];

console.log(firstName1,lastName1); //undefined undefined


//======================Destructurisation
const object = {
    title: 'box',
    color: 'black',
    material: 'wood',
    size: {
        width: 200,
        height: 200,
        length:200,
    }
}
const object2 = object;// тут просто ссылка на информацию в объекте
object2.color = 'red';
console.log(object.color);//red

let num = 10;
let num2 = num;
num2 = num + 10;
console.log(num2);//20

// const object2={...object}// создаем копию объекта 

console.log(object.title);//box

const { title, color, material,size} = object; // const { title, color: boxColor, material }  так меняем имя ключа

console.log(title);//box

console.log(material);//wood

console.log(size); //{width: 200, height: 200, length: 200}

size.height = 250;
console.log(object.size.height);//250

// =========================

console.log('=================================================');

// let material, size;
// ({ material, size } = object);


const complexObject = {
    size: {
        width: 100,
        height: 200,
    },
    items: ['Apple', 'Orange', 'Melone'],
    fill: true
}

const {
    size: { width, height },
    items: [f1, , f3],
    fill: isFill
} = complexObject

console.log(isFill);//true
console.log(f1);//Apple

//========================Recursion======================
console.log('=========================================================')


//5!= 5*4*3*2*1     -> 4!*5
//4!= 4*3*2*1       -> 3!*4
//3!= 3*2*1         -> 2!*3
//2!= 2*1           -> 1!*2
//1!= 1             -> 0!*1
//0!= 1             -> 1


function recursiveFactorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return recursiveFactorial(n - 1) * n;
    }
}
console.log(recursiveFactorial(5));//120
console.log(recursiveFactorial(2));//2

//Task 01 
/* n=10
function recursionOutput(n) -> '12345678910'
*/

//Task 02
/*
'шалаш' 'abba' 'потоп' 'ф роза упала на лапу фзора'

function checkPolindrom('nagan') -> true;
function checkPolindrom('ndsf')  -> false;
*/

//Task03
/*  метод, который получает массив  вида users возвращает массив вида  changedUsers
const users= [
    {firstName: Vasya, lastName: Pupkin, id:1},
    {firstName: Vas, lastName: Pupk, id:2},
    {firstName: Sasha, lastName: Vasin, id:3},
]
const changedUsers-> [
    {fullName: 'Vasya Pupkin', id:1},
    {fullName: 'Vas  Pupk', id:2},
    {fullName: 'Sasha Vasin', id:3},
]
*/
