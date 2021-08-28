// let pifagorTable = [[], [], [], [],[],[],[],[],[],[]];

// for (let i = 0; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         pifagorTable[i][j] = (i + 1) * (j + 1);
//     }
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pifagorTable = [];

// for (let k = 1; k <= 10; k++) {
//     let temp = [];
//     for (let i = 0; i < numbers.length; i++){
//        temp.push(numbers[i]*k) //temp[i] = numbers[i] * k;
//     }
//     pifagorTable.push(temp);
// }

// console.log(pifagorTable);
// console.log(pifagorTable[3][3]);

// document.write('<h1 style="text-align: center" >Multiply table</h1>');
// document.write('<table border="1" cellspacing="0" cellpadding="10" align="center">')
// for (let i = 1; i <= 10; i++){
//     document.write('<tr>');
//     for (let j = 1; j <=10; j++) {
//         document.write(`<td>${j}&times;${i}= ${j*i}</td>`)
//     }
//     document.write('</tr>');
// }
// document.write('</table>');


// let num = 10, str = '';

// while (num > 0) {
//     str += num + ' ';
//     num--;
// }
// console.log(str);

// num = 5;
// str = '';

// for (let i = num; i > 0; i--) {
//     str += i + ' ';

// }
// console.log(str)




let num =41;
let isPrime;
str = '';
for (let i = 2; i <= num; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) str += i+ ' ';
}
console.log(str);