// 'use strict'

// function showThis() {
//     console.log(this)
// }

// showThis();

/*
1.Для любой обычной функции this-  глобальный объект window (при нестрогом режиме) при использовании 'use strict' - undefined
2.Контекст у методов оьъекта-  сам объект
3.This  в функциях-конструкторах относится к создаваемому (новому) экхемпляру объекта
4.Ручная привязка this- call, apply, bind
*/
function sumNumber(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b
    }
    console.log(sum())
}

sumNumber(5, 6);

const object = {
    a: 20,
    b: 14,
    sum: function () {
        console.log(this.a + this.b);
        console.log(this)
        function more() {
        console.log(this)
        }
        more();
    }
}
object.sum()

function User(name, id) {
    this.name = name,
        this.id = id,
        this.hello = function () {
        console.log(`Hello, ${this.name}`);
        }
}

//const user = new User('Vasia', 1);


function sayName() {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John',
    age: 32
}
//sayName();
sayName.call(user);
sayName.apply(user);

function printMessage() {
    console.log(this)
}

const print = printMessage.bind('Hello!');
print();

function count(num) {
    return (num % 2== 0) ? num * this.a : num * this.b
}
const double = count.bind({a:2, b: 3});
console.log(double(11));// 30


var x = 10, y = -20;
var z = Math.min(x, y);
console.log(z);