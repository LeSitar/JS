//const person = new Object();

const person = {
    name: 'John',
    age: 30,
    'like books': true
}

console.log(`Name of person: ${person.name}, age: ${person.age}`);

person.name = 'Vasya';
console.log(person.name);

person.isMarried = true;
console.log(person);

console.log(person['like books']);
console.log(person['age']);


let key = 'like books';
console.log(person[key]); // person.key-> don't work


// delete person.age;
// console.log(person.age);
// console.log(person);

// let personKey = prompt('What  you would like  know about person?', 'name');
// alert(person[personKey]);

const item = {
    name: 'test',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    padding: {
        top: 10,
        bottom: 20,
        left: 50
    }
}

for (let key in item) {
    if (typeof (item[key]) === 'object') {
        for (let colors_key in item[key]) {
        console.log(`Properties ${colors_key} has value ${item[key][colors_key]}`)  
        }
    } else {
        console.log(`Properties ${key} has value ${item[key]}`)
    }
    
}

console.log(item.colors.border) //item['colors']['border']

//Homework

let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate:1900
}

//посчитать и распечатать сумму всех зарплат
//Вывести, чтобы печаталось John has salary: 2000, Kate has salary:1900
//добавить двух сотрудников
// найти среди списка человека с самой большой зарплатой и вывести его  имя. 'Max salary has 'Name', '2500'.