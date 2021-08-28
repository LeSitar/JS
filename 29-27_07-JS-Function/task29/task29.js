//Task01
//Отсортировать массив users по возрасту

// const users =[
//     {name: 'Anna', address:{city:'Berlin', country:'Germany'}, age: 32},
//     {name: 'Vasya', address:{city:'Tokio', country:'Japan'}, age: 28},
//     {name: 'Mariya', address:{city:'London', country:'England'}, age: 15},
//     {name: 'Mark', address:{city:'Rom', country:'Italy'}, age: 46},
//     {name: 'Sofi', address:{city:'Verona', country:'Italy'}, age: 38},
//     {name: 'Sergio', address:{city:'Barcelona', country:'Spain'}, age: 18}
// ]


// function sortByKey(key) {
//     return (a, b) => a[key] > b[key] ? 1 : -1;
// }
// users.sort(sortByKey('name'));
// console.log(users);
// users.sort(sortByKey('age'));
// console.log(users);

// users.sort((user1, user2) => user1.age - user2.age);



// const usersAgeArray = users.sort(function (a, b) {
//     if (a.age > b.age){
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1
//     }
//     return 0;
// }
// )
// console.log(usersAgeArray)



//Task02
/* 
[1,5,8,4,6,9,3,10];
function filterRange(array,1,4) -> [1,3,4]
 */

// const arr = [1, 5, 8, 4, 6, 9, 3, 10];

// function filterRange(array, a, b) {

//     const result = array.filter(number => number >= a && number <= b);
//     result.sort((a, b) => a - b);
//     return result;
// }
// console.log(filterRange(arr, 1, 4));

// console.log(arr);
// function filterRange2(array, start, end) {
//     array.sort((a,b) => a-b);
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < start){
//             array.splice(i, 1);
//             i--;
//         }
//         if (array[i] > end){
//             array.splice(i);
//             break;
//         }
//     }
//     return array;
// }

// console.log(filterRange2(arr, 1, 4));


//Task03
/* Отсортировать массив в порядке убывание
[7,3,8,9,10,2] -> [10,9,8,7,3,2]
 */

// const array = [7, 3, 8, 9, 10, 2];
// function compare(a, b) {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     if (a == b) return 0;
// }
// array.sort(compare);
// console.log(array)

// let nums = [7, 3, 8, 9, 10, 2];
// nums.sort((a, b) => b - a);
// console.log(nums);


/* Сгенерировать штатное расписание, у сотрудников есть поля: имя, часы работы, стоимость часа, 
    создать ведомость, в которой будет список сотрудников, с подсчитанной зп и общая сумма всех зарплат.
*/

// const company = {
//     name: 'ABC',
//     team: []
// }


const company = createCompany('ABC', 10);
console.log(company);
function createCompany(name,qty) {
    return {
        name: name,
        qty: qty,
        team: createCompany(qty),
    }
}

function crateTeam(quantity) {
    const team = [];
    for (let i = 0; i < quantity; i++){
    team.push({
        name: `employee_${i+1}`,
        hours: Math.floor(Math.random()*120),
        rate: 30
    });
        return team;
}
}

// //{name: 'Vasya',hours: 120, rate: 1000}
// company.team.push({ name: 'Vasya', hours: 120, rate: 30 });

// for (let i = 0; i < 9; i++){
//     company.team.push({
//         name: `employee_${i+1}`,
//         hours: Math.floor(Math.random()*120),
//         rate: 30
//     });
// }
// console.log(company.team);

// const doc = {
//     name: 'Doc',
//     list: [],
//     total:0
// }
function createDoc(name,personals) {
    return {
        name: name,
        list: createList(personals),
        total:0
        
    }
    
}
function createList(team) {
    let list = [];
    for (let i = 0; i < team.length; i++) {
        list.push({
            name: team[i].name,
            salary: team[i].hours * team[i].rate,
        })
    }
    return list;
}
// console.log(doc.list);
// console.log(doc.total);

