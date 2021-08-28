
// #32
//Task01
/* 
'hjkld fghj fhjgldhgfjlhsg shfjg shgjslg' -> 4 (вернуть длину самого короткого слова в строке)
 */

// let str = 'hjkld fghj fhjgldhgfjlhsg shfjg shgjslg';

// function findShortest(str) {
//     const arr = str.split(' ');
//     let shortest = arr[0].length;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length < shortest) {
//             shortest = arr[i].length;
//         }
//     } return shortest;
// }
// console.log(findShortest(str));

// function findShortest1(str) {
//     return  str.split(' ').reduce((minWord, currentWord) => minWord.length < currentWord.length ? minWord : currentWord).length;
// }
// console.log(findShortest1(str));

// function getShortWord(str) {
//     return str.split(' ').sort((a, b) => b.length - a.length).pop().length;
// }
// console.log(getShortWord(str));

// function shortestWord(str) {
//     return Math.min(...str.split(' ').map(word => word.length));
// }
// console.log(shortestWord(str));



//Task02
/*
function isIsogram('abcd') -> true;
function isIsogram('abbcd') -> false;
function isIsogrma('abdcA') -> false 
*/
// function isIsogram(str){
//     let i = 0;
//     const strings = str.toLowerCase().split('').sort();
//     while(strings[i] != strings[i+1] && i < strings.length - 1 ) i++;
//     return i == strings.length -1 ? true : false
// }

// function isIsogram1(str){
//     let count = {}  // {a: 1, b:1, c:1, d:1}  // {a: 1, b:2, c:1, d:1}
//     const strings = str.toLowerCase().split('').sort();
//     for(s of strings){
//         count[s] ? count[s]++ : count[s] = 1;
//         if(count[s] > 1) return false
//     }
//     return true
// }

// console.log(isIsogram('abcd'))
// console.log(isIsogram1('abcd'));
// console.log(isIsogram1('abbcd'));


const isIsogram2 = (string) => string.toLowerCase().split('').every((s, index) => string.indexOf(s) === index);

console.log(isIsogram2('abcd'))
console.log(isIsogram2('abcdf'));
console.log(isIsogram2('abbcd'));

// function isIsogram(str) {
//     let array = [];
//     array = str.toLowerCase().split('');
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++){
//         }

//     }
// }



// function isIsgram(text) {
//     const prototypText = 'abcd';
//     return text === prototypText ? true : false;
// }
// console.log(isIsgram('abcd'));
// console.log(isIsgram('abbcd'));
// console.log(isIsgram('abdcA'));