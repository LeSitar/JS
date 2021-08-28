
//=======функция для любого массива, переданного как параметр
const numbers = [1, 2, 3, 5];
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printArray(numbers)

//=========функция только для массива  numbers
function printNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
printNumbers();

function displayItems(item) {
    for (let item of numbers) {
        console.log(item)
    }
}

//function constructor================================

// const user1 = {
//     name: 'Vasya',
//     lastName: 'Ivanov',
//     age: 32,
//     hello: function () {
//         console.log(`Hallo, my name is ${this.name}`)
//     }
// }
// const user2 = {
//     name: 'Kolya',
//     lastName: 'Nikolaev',
//     age: 26,
//     hello: function () {
//         console.log(`Hallo, my name is ${this.name}`)
//     }
// }

function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.hello = function () {
        console.log(`Hallo, my name is ${this.name}`)
    }
}
const user1 = new User('Vasya', 'Ivanov', 32);
user1.hello(); // Hallo, my name is Vasya
const user2 = new User('PArtia', 'Ivankov', 23);
user2.hello();


const array = new Array(3);
console.log(array); //(3) [empty × 3]
const date = new Date();
console.log(date);   //Tue Aug 17 2021 10:16:58 GMT+0200 (Mitteleuropäische Sommerzeit)

User.prototype.goodBye = function () {
    console.log(`User ${this.lastName} say good bye!`)
}
user1.goodBye();//User Ivanov say good bye!
user2.goodBye(); //User Ivankov say good bye!

user1.getFullName = function () {
    console.log(`My full name is ${this.name} ${this.lastName}`)
}
user1.getFullName(); //My full name is Vasya Ivanov

User.prototype.isHuman = true;
console.log(user1.isHuman);//true
console.log(user2.isHuman);//true


console.log(user1);