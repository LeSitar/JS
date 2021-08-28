/* Task01
написать метод, который на вход получает массив целых чисел, которые могут повторятся, а возвращает новый массив без повторяющихся чисел
[2,5,7,9,7,2] -> [2,5,7,9]
[2,0,0,1,1,2] -> [2,0,1]
 */

// let num = [2, 5, 7, 9, 7, 2];

// function uniqNumbers(array) {
//     const newArray = [];
//     for (let number of array) {
//         if (!newArray.includes(number)) {
//             newArray.push(number);
//         }
//     }
//     return newArray;
// }
// console.log(uniqNumbers(num))

// let array = [2, 5, 7, 9, 7, 2];

// const uniqArray = array.filter((el, i) => array.indexOf(el) === i);
// console.log(uniqArray);

// const array1 = [2, 5, 7, 9, 7, 2];
// const array2 = [2, 0, 0, 1, 1, 2];

// function showUniqueNumbers(arr) {
//     const array = arr;
//     const uniqArray = [...new Set(array)];
//     return uniqArray;
// }
// console.log(showUniqueNumbers(array1));
// console.log(showUniqueNumbers(array2));



//Task02
/* 
написать метод, который на вход получает массив целых чисел, сравнивает первый и последний элемент этого массива и возвращает новый массив, в котором все элементы старого массива заменены на большее значение.
[1,5,6,7,2] -> [2,2,2,2,2];
[7,3,8,4] -> [7,7,7,7]
 */

// let array = [2, 5, 7, 9, 7, 2];

// function changeArray(arr) {
//     const max = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
//     const newArray = [...arr];      //arr.slice();
//     return newArray.fill(max);
// }
// console.log(changeArray(array));


let arr = [2, 5, 7, 9, 7, 2];

function strangeArrChanger(arr) {
	const max = arr[0] > arr[arr.length-1] ? arr[0] : arr[arr.length-1]
	return arr.map(item => item = max)
}
console.log(strangeArrChanger(arr));


// const array3 = [1, 5, 6, 7, 2];
// const array4 = [7, 3, 8, 4];

// function showHightNumber(array) {
//     let newArray= [];
//     if (array[0] > array[array.length - 1]) {
//         newArray = array.fill(array[0]);
//     }
//     else newArray = array.fill(array[array.length - 1]);
//     return newArray;
// }

// console.log(showHightNumber(array3));
// console.log(showHightNumber(array4));


//Task03*
/* 
В игру "запомни слова" добавить возможность выйти из игры на этапе выбора языка
 */

//метод кооторый получает строку и симфол. Возвращает количество повторений символа

const countSymbol = function (str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] === char)
        counter++
    return counter;
}

const countSymbolReduce = function (str, char) {
    let counter = 0;
    str.split('').forEach(item => {
        if (item === char) counter++
    })
    return counter;
}
console.log(countSymbol('qfqfqfqad', 'q'))

console.log('Reduce ' + countSymbolReduce('qfqfqfqaqqqd', 'q'))


function countRepeatSymbol(str, char){
    return str.split('').filter(item => item == char).length
}

console.log(countRepeatSymbol('qfqfqfqadqqq', 'e'))

function countRepeatSymblWithReduce(str, char){
    return str.split('').reduce((count,s) => s==char ? count +=1 : count, 0)  // reduce(logic, 0)
}

console.log(countRepeatSymblWithReduce('qfqfqfqadqqq', 'q'))

//  [1,2,2,4,5,5] 'tryerttt'   1245233567892 -> '1245233567892' -> [1] [45] [3356789] [] 

function countRepeat(item, symbol){
    item = item.toString();
    symbol = symbol.toString();
    return item.split(symbol).length -1
}

console.log(countRepeat([1,2,2,4,5,5], 7));
