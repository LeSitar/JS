

// ===========================STRING==================

const str = 'hello!\n\'world!\'\u{1F60D}' // "Hello!", `Hello!`
//==========================================================
// let str2 = `hello
// world!
// *----*`
// console.log(str);
// console.log(str2);
//==========================================


console.log(str[0]); // обращение к  букве в строке , будет буква h *const str = 'hello!\n\'world!\'\u{1F60D}'*

console.log(str.length);

let str2 = `hello world wow!`
console.log(str2[str2.length - 1]);

str2[0] = 'H';  //не делает первую букву большой

console.log(str2);
// ==========================================================================
const numbers = [1, 2, 3, 4, 5]; //в масивах можно менять местами цифры
numbers[0] = 5;
console.log(numbers);
// =========================================================================
console.log(str2.charAt(2)); //обращенеи у будкве l


str2 = str2.toUpperCase(); //Делаем все буквы большими

console.log(str2)

str2 = str2.toLowerCase();
console.log(str2)
// ==============================================================================

console.log(str2.indexOf('w')); //определеит место буквы , будет номер 6

console.log(str2.lastIndexOf('w'));// определяет место буквы с конца 
// ==================================
console.log(str2.startsWith('h')); //проверяет такое ли начало у текста

console.log(str2.endsWith('!')); // проверяем заказнчивается ли  текст на !
// ===================================

console.log(str2.includes('wor')); //проверяет есть ли в тексе сочетание

// ==========================
console.log('==================');


console.log(str2.slice(2, 7));  // можно вырезать кусочек,  включая символ под индексом 2, 7  не включая

let str3 = str2.slice(2, 6);
console.log(str3);

//================================
console.log(str2.substring(11, 6))  //поймет что хотим вырезать строчку с 6 по 11 элемент
console.log(str2.substr(6,3))  // с какоко места начинаем вырезать  и  какое количество нужно отрезать)

str2 = str2.replace('e', 'a') // меняем букву е на  букву а, поменчет только первую попавшуюся букву e.
console.log(str2);

str2 = str2.replaceAll('w', 'W');// меняем все  буквы   W на большие  hallo World WoW!
console.log(str2)
    // ==================================================

let names = 'Ivan, Anna, Vasya, Olya, Petya';
let nameArray = names.split(','); //Ivan (5) ["Ivan", " Anna", " Vasya", " Olya", " Petya"]
console.log(nameArray[0], nameArray); //выводим из масива  первое имя  и  полностью весь массив

const arrayLetters = 'apple'.split(''); ///["a", "p", "p", "l", "e"]
console.log(arrayLetters); 



// ======================ARRAYS====================================




const num = [1, 2, 3, 4];
delete num[1]; // удаляем ихз массива элемент [1, empty, 3, 4]
console.log(num); 

num.splice(1, 1); // [1, 3, 4]
console.log(num); 


num.splice(1, 1, 5, 6, 7)//  [1, 5, 6, 7, 4]    удалит 1 элемент, удалит 1 число т.к. второе значение 1, и вставит туда 5,6,7
console.log(num); 

const num1 = num.slice(1, 3); //  [5, 6]
console.log(num1);
                                                                    // num       num1
// const newNums = num.concat(num1); //объединяем два массива    [1, 5, 6, 7, 4, 5, 6].
// console.log(newNums);


// ==============================[1, 5, 6, 7, 4] =========================================
const newNums = num.concat(num1, 6,7, num1); //[1, 5, 6, 7, 4, 5, 6, 6, 7, 5, 6]
console.log(newNums);

num.forEach(item => console.log(item * 2)); // удваеваем все элементы массива  num. 2
        //ЗНАЧЕНИЕ  ИНДЕКС  САМ МАСИВ
                                      //  [1, 5, 6, 7, 4] 
num.forEach((item, index, array) => console.log(`${item} has index ${index}, in ${array}`));

// 1 has index 0, in 1,5,6,7,4
// main.js:108 5 has index 1, in 1,5,6,7,4
// main.js:108 6 has index 2, in 1,5,6,7,4
// main.js:108 7 has index 3, in 1,5,6,7,4
// main.js:108 4 has index 4, in 1,5,6,7,4

// ===================================================================== 
let users = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Anna' },
    { id:3, name:'Vanya'},
]

let user = users.find(item => item.id == 1); // ищем в  users  по id под номером 1  {id: 1, name: "Vasya"} 
console.log(user);

user.name = 'Kolya'; // {id: 1, name: "Kolya"} //поменяли имя 
console.log(user);

let usersWithLongName = users.filter(user => user.name.length >= 5); // ищем  пользователя по фильтру 0: {id: 1, name: "Kolya"} 1: {id: 3, name: "Vanya"}
console.log(usersWithLongName);

// =================================================================

num4 = [1, 2, 3, 4];
let newNumbers = num4.map(num4 => num4 * 2); // [2, 4, 6, 8]
console.log(newNumbers);
// ===============================================================

const cities = ['Berlin', 'London', 'Paris', 'Moscow'];
const citiesLength = cities.map(city => city.length); // [6, 6, 5, 6]  считаем длину элементов в массиве
console.log(citiesLength);

//==============================================================

num5 = [1, 2, 3, 4, 5];
let result = num5.reduce((sum, current) => sum + current, 10); // посчитали сумму всез масивов 15 если указали  ещё 10 в  конце, то  начинаться  складываться будет с 10 +1+2+3+4+5 и будет 25.
console.log(result);


let strings = ['one', 'two', 'three']; //   onetwothree
result = strings.reduce((str, s) => str + ' ' + s);
console.log(result);





