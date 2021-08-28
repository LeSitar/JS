let numbers = [1, 2, 3, 4, 5];

console.log(numbers.reverse());
console.log(numbers);

let names = 'Ivan, Anna, Olya';
let namesArray = names.split(', '); //разделили элементы на массивы
console.log(namesArray); // ["Ivan", "Anna", "Olya"]

console.log(namesArray.join('-')); //Ivan-Anna-Olya  склеили элементы и поставили между ними -
console.log(namesArray);

let str= namesArray.join('-')
console.log(str.split('').reverse().join(''));  //разделили на массивы , развернули и  сколеили обратно


const letters = ['b', 'c', 'd', 'f', 'a', 'A','C','J'];
letters.sort();  // сортировка по алфавиту  ["A", "C", "J", "a", "b", "c", "d", "f"]
console.log(letters);

const number = [2, 7, 1, 11, 15, 21, 20, 1.2, 4.3]; // сортирует сперва всё что начинается с 1, потом на 2, и т.д. ) 1, 1.2, 11, 15, 2, 20, 21, 4.3, 7]
number.sort();
console.log(number);

//============Objects=========================

const user = {
    name: 'Vasia',
    age: 32,
    isMarried: true,
    adress: {
        city: 'Berlin',
        country: 'Germany'
    }
}

const keys = Object.keys(user); //собираем все свойства  в  массив ["name", "age", "isMarried"]
console.log(keys);
console.log(keys.length); //3


console.log(Object.values(user)); // ["Vasia", 32, true]  


console.log(Object.entries(user)); //делаем двухмерныыый массив 0: ["name", "Vasia"] 1 : (2) ["age", 32] 2: (2) ["isMarried", true]

const prices = {
    banana: 1,
    orange: 2,
    fish: 4
}
    //  key    value
//0:  [[banana, 1], [orange, 2], [fish, 4]]
let doublePrice = Object.entries(prices).map(([key, value]) => [key, value * 2]); // [banana, 2]1: (2) [orange, 4] 2: (2) [fish, 8]
console.log(doublePrice);

doublePrice = Object.fromEntries(doublePrice);// делаем как объект {banana: 2, orange: 4, fish: 8}
console.log(doublePrice);

// ==================================References and Object copy===============================================
console.log('=============================================--')
let a = 10;
let b = 20;

function doSomething(a, b) {
    a *= a;
    console.log(a);   
    b /= 4;
    console.log(b);
}

doSomething(a, b);
console.log(a, b);

let array = [1, 2, 3, 4, 5];

array.forEach((num, index, array) => array[index] = num * 2);

// function changeArray(arr) {     // [2, 4, 6, 8, 10]  умножит и сохранит занчение
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * 2;
//     }
//     // for (let num of arr) num *= 2;
// }
// changeArray(array);
console.log(array);


const user1 = {
    name: 'Vasia',
    age: 32,
    isMarried: true
}

const user2 = user1; //  не создается  ещё один объет, а  просто получается две ссылки к одному объетку.
user2.name = 'Petia';
console.log(user1);
console.log(user2);

const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray.slice(); //взяли данные из старого массива и пересохранили их.
const newArray= [...oldArray] //  возьми данные в старом массиве и разверни в новом

newArray[3] = 'd';
console.log(oldArray);
console.log(newArray);


function copyObject(obj) {
    const objCopy = {};
    for (let key in obj) {
        objCopy[key] = obj[key];
    }
    return objCopy;
}

const numbers1 = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y:4
    }
}

const copyNumbers = copyObject(numbers1);

copyNumbers.a = 10;
copyNumbers.c.x = 10;
console.log(numbers1)
console.log(copyNumbers)

const copyNum = Object.assign(numbers, { e: 12 });

console.log(copyNum)

const client = { name: 'Vasya' },  //{name: "Vasya"}
    permission1 = { canView: true },
    permission2 = { canEdit: true };
console.log(client);

const client1= Object.assign(client, permission1, permission2); //{name: "Vasya", canView: true, canEdit: true}
console.log(client1);

// ===============================Spread operator

const userNames = ['Anna', 'Vasyz', 'Koliz'];
const citie = ['Berlin', 'Paris', 'Tokio'];
const all = [...userNames, ...citie, 'I like it']; //["Anna", "Vasyz", "Koliz", "Berlin", "Paris", "Tokio", "I like it"]

console.log(all);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [2, 5, 7];
log(...nums);
const messages = ['hello', 'nice to see you', 'good bye!'];
log(...messages);