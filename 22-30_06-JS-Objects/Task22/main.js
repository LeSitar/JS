
// calcute and print summe of all salaries 
//'John has salary: 2000, Kate has salary: 1900'
// add two employee in object with 
//find employee with maximal salery ('Max salary has Name, 2500')


// const salaries = {
//     Jhon:  2000,
//     Anna: 2100,
//     Piotr: 2500,
//     Kate: 1900 
// };

// alert('John has salary: ' + salaries.Jhon + '\nKate has salary: ' + salaries.Kate);

// salaries.Igor = 2700;
// salaries.Pupkin = 2200;

// let allSalaries= 0;
// for (key in salaries) {
//     allSalaries += salaries[key];
// }
// alert('Summe of all salaries: ' + allSalaries);

// let maxSalary=0;
// for (let key in salaries) {
//     if (!maxSalary || salaries[key]);
//     maxSalary = salaries[key];    
// }
// console.log(maxSalary);

//Teacher version

const salaries = {
    Jhon:  2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900 
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(`All salaries is: ${sum}`);

console.log(`John has salary: ${salaries.Jhon}, Kate has salary: ${salaries.Kate}`);
salaries.Maria = 3000;
salaries.Mark = 2900;

let countOfKeys = 0;
for (let key in salaries) {
    countOfKeys++;
}
console.log(countOfKeys);

let count = 0;
for (let key in salaries) {
    count++;
    if (count == 1 || count == countOfKeys) {
        console.log(`${key} has salary: ${salaries[key]}`)
    }
}

let maxSalary = 0;
let keyName = '';

for (let key in salaries) {
    if (salaries[key] > maxSalary) {
        maxSalary = salaries[key];
        keyName = key
    }
}

console.log(`Max ssalary has ${keyName}, ${maxSalary}`);



