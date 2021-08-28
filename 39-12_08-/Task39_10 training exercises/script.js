
//Task1=========Cоздать новый массив юзеров старше 20 лет

const users = [{ name: 'Vasya', age: 15, height: 180 }, { name: 'Petia', age: 20, height: 160 }, { name: 'Vlada', age: 25, height: 149 }, { name: 'Stepan', age: 30, height: 190 }, { name: 'Boris', age: 45, height: 176 }, { name: 'Masha', age: 32, height: 135 }]

let newArray = users.filter(user => user.age > 20);
console.log(newArray);



//Task2 создать массив юзеров ниже 150

let ageArray = users.filter(user => user.height < 150);
console.log(ageArray);

// Task3 добавить в существующий массив уникальные id для каждого юзера
let number =0;
users.forEach((item, number) => item.id = `${number + 1}`);

users.map((user, index) => user.id = index + 1);
console.log(users);

//Task4 вернуть юзера с самым длинным именем

const sortUsers = users.sort((user1, user2) => user1.name.length - user2.name.length);
console.log(sortUsers[sortUsers.length - 1]);

const userWithLongName = users.reduce((user, user1) => user.name.length > user1.name.length ? user : user1);
console.log(userWithLongName);

//Task5 вернуть массив -> ['Vasya, age: 15 years old, height: 180 cm', ...]

const newArray1 = users.map(user => `${user.name}, age: ${user.age} years old, height:${user.height}  cm`);
console.log(newArray1);


// Task6 [Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)
// const array2 = [Vasya Vasilev, Petya Petrov];
const people = ['Vasua Ivanov', 'Kolya Petrov'];
// const peopleNew = people.map(p => ({ firstName: p.split(' ')[0], lastName: p.split(' ')[1] }));
const peopleNew = people.map(p => p.split(' ')).map(p => ({ firstName: p[0], lastName: p[1] }));
console.log(peopleNew);


//Task7 написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]

function fillArr(num, item) {
    const arr = new Array(num);
    return arr.fill(item);
}
console.log(fillArr(5, 'hello'));

// function fillArr(number, text) {
//     let array = [];
//     for (let i = 0; i < number; i++){
//         array[i]= text;
//     }return array
// }
// console.log(fillArr(5, 'hello'));


//Task8 написать функцию changeString ('abcdef') -> 'aBcDeF'

function changeString(str) {
    return str.split('').map((el, index) => (index % 2) ?  el.toUpperCase() : el.toLowerCase()).join('');
    // return str.toLowerCase().split('').map((el, index) => index % 2 != 0 ? el.toUpperCase : el);
}
console.log(changeString('abcdef'));

//Task9 написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве

//[1, 2, 4, 8, 9, 4, 1, 5]

// function countEntries(array, item) {
//     return array.reduce((count, element) => element === item ? count +1 : count,0);
// }
// console.log(countEntries([1, 2, 4, 8, 5, 9, 4, 1, 5], 5));
// console.log(countEntries(['one', 'two'], 'one'));

function countItem(arr, el) {
	return arr.join('').length - arr.join('').replaceAll(el, '').length
}
console.log(countItem(['Vasya Vasileev', 'Petya Peetrov'], 'e'))
console.log(countItem([234, 32, 56, 43, 21, 35, 27, 3, 76, 2, 567, 32, 12352], 2))


//Task 10 функция clearArray([1, 2, 3, null, '', undefined, 5, NaN, 7]) -> [1, 2, 3, 5, 7]

function clearArray(arr) {
    return arr.filter(el=> el)
}
console.log(clearArray([1, 2, 3, null, '', undefined, 5, NaN, 7]));

