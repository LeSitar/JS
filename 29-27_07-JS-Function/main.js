function sumInput1(){
    let numbers = [],
        sum = 0;
    while(true){
        const userNumber = prompt('Enter the number, please');
        if(userNumber ==='' || userNumber == null || isNaN(userNumber)){
            break;
        }
        numbers.push(+userNumber)
    }
    if(numbers.length == 0){
    return;
    }
    for (let number of numbers){
        sum +=number;
    }
    return sum;
}
function sumInput2(){
    let numbers = []
    while(true){
        const userNumber = prompt('Enter the number, please');
        if(userNumber ==='' || userNumber == null || isNaN(userNumber)){
            break;
        }
        numbers.push(+userNumber)
    }
    return sum(numbers);
}
function doSomethingWithInputArray(doSomething){
    let numbers = []
    while(true){
        const userNumber = prompt('Enter the number, please');
        if(userNumber ==='' || userNumber == null || isNaN(userNumber)){
            break;
        }
        numbers.push(+userNumber)
    }
    return doSomething(numbers);
}
function sum(array){
    if(array.length == 0){
        return;
    }
    let sum = 0
    for (let el of array){
        sum += el;
    }
    return sum;
}
function changeElementInArray(array){
    /* let newArray = [];
    for(let number of array ){
        newArray.push(number *=2)
    } */
    return array.map(num => num *=2);
}
//alert(sumInput2());
//alert(doSomethingWithInputArray(sum))
//alert(doSomethingWithInputArray(array => array.filter(item => item %2 ==0)));
// alert(doSomethingWithInputArray(array => array.reduce((sum, item)=> sum + item )));
/* alert(doSomethingWithInputArray(changeElementInArray))
alert(doSomethingWithInputArray(function(array){
    return `your input is ${array.join('/ ')}`
}))
alert(doSomethingWithInputArray(array =>`your input is ${array.join('/ ')}`));
alert(doSomethingWithInputArray(array => array.map(num => num += 3)));
 */



// =================== сортируем массив ===============
let arr = [1, 2, 10, 12, 3, 8, 11,100];
arr.sort();
console.log(arr);
arr.sort(compare);   //  сортируем массив и с помощью compare функции перебираем и упорядываем по порядку числа
console.log(arr);

//====функция  сравнивает два числа следуюзих друг за другом и если получается -1 то перемещяет его
function compare(a, b) {
    if (a > b) return 1;
    if (b > a) return -1; //if (a < b) return -1;
    if (a == b) return 0;
}

function compare1(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
function compare2(a, b) {
    return a - b;    
}
arr.sort(compare2) // arr.sort((a, b) => a - b);  тоже самое
console.log(arr)


arr.sort((a, b) => a - b); //отсортировали по порядку данные 
console.log(arr)


let names = ['Vasia', 'Anna', 'Yulia', 'ana'];
console.log(names); // ["Vasia", "Anna", "Yulia", "ana"]
console.log(names.sort());  // ["Anna", "Vasia", "Yulia", "ana"]
console.log(names); //["Anna", "Vasia", "Yulia", "ana"]    т.к. функция сорт, перезаписала  массив

