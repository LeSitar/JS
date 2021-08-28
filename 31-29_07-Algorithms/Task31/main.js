//Task 01
/* function getShortNames(arrayNames)
    ['Kolya', 'Anna','Misha','Mark','Innokentyi'] -> ['Anna','Mark'] length==4
    function getShortNames(namesArray, nameLength) 
 */


// const arr = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'];
// function getShortNames(arrayNames) {
//     let Names = [];
//     for (let i =0; i < arrayNames.length; i++) {
//         if (arrayNames[i].length == 4) {
//             Names.push(arrayNames[i]);
//         } else false;
//     } return Names;
// }
// console.log(getShortNames(arr));



// const arr = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'];
// function getShortNames(namesArray, nameLength) {
//     let Names = [];
//     for (let i = 0; i < namesArray.length; i++) {
//         if (namesArray[i].length == nameLength) {
//             Names.push(namesArray[i]);
//         } else false;
//     } return Names;
// }
// console.log(getShortNames(arr,4));

//Task 02
/*
function getDivisors(12) -> [2,3,4,6]
function getDivisors(15) -> [3,5]
function getDivisors(13) -> '13 is primy'
 */


// function getDivisors(n) {
//     let numbers = [];
//     for (let i = 2; i <= Math.floor(n / 2); i++) {
//         if (n % i == 0) {
//             numbers.push(i);
//         }
        
//     }return numbers.length ? numbers : n +' is prime' 
//     // if (numbers.length == 0) {
//     //         return n + ' is prime'
//     // }return numbers;
// }
// console.log(getDivisors(24));
    




//Task 03*
/*
function sumDigitalNumber(10002345671)-> 29-> 11->2  (recursion   1+2+3+4+5+6+7+1= 29    2+9= 11  1+1=2 
 */
// function sumDigitalNumber(number) {
//     //     if (number < 10) {
//     //         return number
//     //     }return sumDigitalNumber(number % 10 + Math.floor(number/10))
//     return number < 10 ? number : sumDigitalNumber(number % 10 + Math.floor(number / 10))
// }
// console.log(sumDigitalNumber(100024))
// 13%10=3 13/10= Math.floor(1.3)

// function sumDigitalNumber(num) {
//     return num < 10 ? num : sumDigitalNumber(num.toString().split('').reduce((sum, number) => sum + parseInt(number), 0));
// }
// console.log(sumDigitalNumber(1000244))




// function sumTwoArrays(array1, array2) {
//     let sum = 0;
//     for (let i = 0; i < array1.length; i++){
//         sum += array1[i];
//     } for (let i = 1; i< array2.length; i++){
//         sum+=array2[i]
//     }
//     return sum;
// }

// console.log(sumTwoArrays([1, 2, 3], [4, 5]));



function sumTwoArrays(array1, array2) {
    return sumArray(array1) + sumArray(array2);
}
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }  return sum;
}
console.log(sumTwoArrays([1, 2, 3], [4, 5]));