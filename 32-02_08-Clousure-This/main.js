
//========================================Clousure==============
// let myName = 'Vasia';


// function sayHello() {
//     console.log(`hello, ${myName}`);
// }

// sayHello(); // hello, Vasia

// myName = 'Kolia';
// sayHello();// hello, Kolia

let myName;

function getMessage() {
    myName = 'Petya';
    return function () {
        console.log(myName)
    }
}

myName = 'Vasia';

let message = getMessage();
message(); //Petya


function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

let counter = makeCounter();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3
console.log('============================')
counter = makeCounter();
console.log(counter()); //0


// function makeUserId() {
//     let userIdFunctions = [];
//     let i = 0;
//     while (i < 5) {
//         let userId = function () {
//             console.log(i);
//         }
//         userIdFunctions.push(userId);
//         i++;
//     }
//     return userIdFunctions;
// }

function makeUserId() {
    let userIdFunctions = [];
    for (let i = 0; i < 5; i++) {
        let userId = function () {
            console.log(i);
        }
        userIdFunctions.push(userId);
    }
    return userIdFunctions;
}


const userId = makeUserId();
userId[0]();
userId[3]();
console.log(userId);

//=================Prototype====================================

let str = 'some string';
const strObject = new String('another string');

console.log(typeof str);
console.log(typeof strObject);


console.log('abc'.toUpperCase());

console.dir([1, 2, 3]);

const cat = {
    feet: 4,
    tail: 1,
    ears: 2,
    voice: function () {
        console.log('meow-meow')
    }
}
const barsik = {
    color: 'black',
    age: 2
}

barsik.__proto__ = cat; //.... deprecated  устаревший метод
console.log(barsik);
console.dir(barsik);

barsik.voice(); //meow-meow

console.log('=================================')
//                    кому    от кого
Object.setPrototypeOf(barsik, cat);   //   даём прототим  кому  от кого   Статический способ
console.log(barsik);
console.dir(barsik);



const murzik = Object.create(cat); // динамический способ
console.log(murzik); //[[Prototype]]: Object ears: 2 feet: 4 tail: 1.

//const murzik = Object.create(cat, {color:{value: 'white'}, age:{value: 4}});     так мы создаём кота с прототипом от cat и дополняем ему ещё личные особенности цвети и возраст


//=======================================================function Constructor


function User(name, id) {
    this.name = name,
    this.id = id,
        this.human = true,
        this.say = function (message) {
        console.log(`${name} say: ${message}`)
        }
}


const user1 = new User('Vasia', 1);
user1.say('Hallo');

const user2 = new User('Anna', 2);
user2.say('Nice to meet you!');


User.prototype.goodBye = function () {
    console.log(`User ${this.name} say goodbye!`);
}
user1.goodBye();
user2.goodBye();

