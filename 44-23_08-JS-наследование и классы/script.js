const person1 = {
    id: 0,
    name: 'John',
    age: 23,
};
const person22 = {
    id: 1,
    name: 'Johann',
    age: 33,
};

let idIterator = 2;
function Person(name, age) {
    this.id = idIterator++;
    this.name = name;
    this.age = age;
    this.sayHallo = () => console.log(`hello, ${this.name}`);
}

const person3 = new Person('Vasia', 32);
console.log(person3);//age: 32 id: 2 name: "Vasia"

const person4 = new Person('Vasiass', 322);
console.log(person4);
console.log(person1);

// const employee = {
//     id: 5,
//     name: 'Jane',
//     age: 34,
//     profession: 'driver',
//     salary: 2300
// }

function Employee(name, age, profession, salary) {
    this.profession = profession;
    this.salary = salary;
    this.display=()=>console.log(`employee:${this.profession}${this.name}`)
    this.__proto__ = new Person(name, age);
}


const employee = new Employee('teacher', 3000);
console.log(employee);
console.dir(employee);
console.log(employee.name);

console.log(Object.keys(employee));

const array = [1, 2, 3, 4, 5, 6];
array.join('');
const str = 'hello';
Array.prototype.getEven = function () {   //записать на второй уровень функцию массиву 
    return this.filter(item => item % 2===0);
}

// console.dir(array);
// console.dir(str);
// console.dir(person3);

////=============================создание класса, чтобы на второй уроваень убрать функционал
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.calc = () => this.width * this.height;
    }
    calcArea() {
        return this.height*this.width
    }
    print() {
        console.log(`width; ${this.width}, height: ${this.height}`)
    }
}

const square = new Rectangle(20, 20);
console.log(square.calcArea());

const rect = new Rectangle(20, 40);
console.log(rect.calcArea());
console.dir(square);

class ColorRectangleWithText extends Rectangle{ // наследование функции через слово  extends
    constructor(height, width, text, color) {
        super(height, width); //super для того чтобы указать на родительский класса(обязательно)
        this.text = text;
        this.color = color;
    }
    showMyProps() {
        console.log(`color: ${this.color}`)
    }
    print() {
        super.print()
        console.log('hello from color');
    }
}
const colorRect = new ColorRectangleWithText(100, 20, 'Hello', 'red');
console.log(colorRect.calcArea());
colorRect.print();
console.dir(colorRect);
rect.print()