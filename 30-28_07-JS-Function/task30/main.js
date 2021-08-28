//Task 01 
/* n=10
function recursionOutput(n) -> '12345678910'
*/



// function recursionOutput(n) {
//     if (n == 1) {
//         return '1 ';
//     } else {

//         return recursionOutput(n - 1) + n + ' ';
//     }
// }
// console.log(recursionOutput(7));

// function recursionOutput(n) {
//     return (n == 1) ? '1 ' : recursionOutput(n - 1) + n + ' ';
//     }
// console.log(recursionOutput(7));



//Task 02
/*
'шалаш' 'abba' 'потоп' 'а роза упала на лапу фзора'

function checkPolindrom('nagan') -> true;
function checkPolindrom('ndsf')  -> false;
*/

// function checkPolindrom(str) {
// 	let arr = str.replaceAll(' ', '').split('');
// 	for (let i = 0, j = arr.length - 1; i < j;) {
// 		if (arr[i++] == arr[j--]) continue
// 		return false
// 	}
// 	return true
// }
// console.log(checkPolindrom('а роза упала на лапу азора'))
// console.log(checkPolindrom('а роза упала н лапу азора'))

function checkPolindrom2(str) {
	str = str.replaceAll(' ', '')
	return str == str.split('').reverse().join('')
}
console.log(checkPolindrom2('а роза упала на лапу азора'))
console.log(checkPolindrom2('а роза упала на лапу азора'))


// function checkPolindrom(str) {
//     let text = str;
//     let text1 = text.split();
//     if (text == text1){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkPolindrom('nagann'));




// function checkPolindrom(str) {

// }
// console.log(checkPolindrom('nagan'));





//Task03
/*  метод, который получает массив  вида users возвращает массив вида  changedUsers
const users= [
    {firstName: Vnasya, lastName: Pupkin, id:1},
    {firstName: Vas, lastName: Pupk, id:2},
    {firstName: Sasha, lastName: Vasin, id:3},
]
const changedUsers-> [
    {fullName: 'Vasya Pupkin', id:1},
    {fullName: 'Vas  Pupk', id:2},
    {fullName: 'Sasha Vasin', id:3},
]
// */
// showChangedUsers();
// const users = [
//     { firstName: Vasya, lastName: Pupkin, id: 1 },
//     { firstName: Vas, lastName: Pupk, id: 2 },
//     { firstName: Sasha, lastName: Vasin, id: 3 },
// ];

// function showChangedUsers(arr) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++){
//         newArray.push({
//             fullName: arr[i].firstName + ' ' + arr[i].lastName,
//                 id: arr[i].id 
//             })
//     }
//     return newArray;
// }
// console.log(showChangedUsers(users));


///   Домашка,  почитать по ссылкам   информацию об алгоритмах 
//Task 01
/* function getShortNames(arrayNames)
    ['Kolya', 'Anna','Misha','Mark','Innokentyi'] -> ['Anna','Mark'] length==4
    function getShortNames(namesArray, nameLength) 
 */

// const arrayNames = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'];
// console.log(arrayNames[0]);

// function getShortNames(arr) {
    
        
//     }

//Task 02
/*
function getDivisors(12) -> [2,3,4,6]
function getDivisors(15) -> [3,5]
function getDivisors(13) -> '13 is primy'
 */

//Task 03*
/*
function sumDigitalNumber(10002345671)-> 29-> 11->2  (recursion   1+2+3+4+5+6+7+1= 29    2+9= 11  1+1=2 
 */