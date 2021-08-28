//Task01 
/* Конвертер валют
    Запросить у пользователя сумму в рублях
    Конвертировать эту сумму в евро и в доллары
    Вывести результат на экран
*/


// // // Task1
// const rubbel = +prompt('Enter the amount in rubles');
// const euro = rubbel / 87;
// const dollar = rubbel / 73;
// alert('Amount in euro: ' + euro.toFixed(2) + '\nAmount in dollar: ' + dollar.toFixed(2));

//Task02
/* Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число, получаемое от пользователя)
 */

// //Task2

// const number = +prompt('Enter the number please');
// let summe = 0;
// for (let i = 2; i <=number; i++){
//     if (i % 2 === 0) {
//         summe += i;
//         console.log(i);
//     }
// }
// alert('The sum of even numbers is: ' + summe);

// Teacher version

// let num = 10, sum = 0;
// while (num > 0) {
//     if (num % 2 === 0) { //  если условие нечетное число (num% 2 !=0) 
//         sum += num
//     }
//     num--;
// }
// console.log(sum)

// let num = 10, sum = 0;
// while (num >= 1) {
//     sum = (num % 2 != 0) ? sum += num : sum;
//     num--;
// }
// console.log(sum);

// num = 10, sum = 0;

// for (let i = 1; i <= num; i++){
//     if (i % 2 != 0) continue;
//         sum +=i;
//     }
// console.log(sum);

// num = 10, sum = 0;

// for (let i = 2; i <= num; i+=2){
//         sum +=i;
//     }
// console.log(sum);



//Task03
/* Игра угадай число
    Случайным образом "загадать" число в диапозоне от 0 до 20
    Предложить пользователю угадать это число
        если введенный ответ больше загаданного числа - вывести сообщение: "загаданное число меньше"
        если ответ меньше - "загаданное число больше"
        если пользователь угадал - "поздравляю, вы выиграли!"
    У пользователя должно быть 3 попыток, после неудачной попытки должно выводиться 
    на экран предложение ввести число еще раз, в этом сообщение указывается сколько попыток осталось.
    Если за пять попыток пользователь не угадал число - вывести сообщение: "Вы проиграли, число было:..."   
 */


// // // Task3
// let count = 3;
// let randomNumber = parseInt(Math.random() * 20);
// console.log(randomNumber);
// while (count) {
//     let userNumber = parseInt(prompt('Try to guess the number, enter the number'));
//     count--;
//     if (userNumber > randomNumber) {
//         alert('The implied number is lower, you have ' + count + ' tries left');
//     } else if (userNumber < randomNumber) {
//         alert('The implied number is larger,you have ' + count + ' tries left');
//     }
//     else if (userNumber === randomNumber) {
//         alert('Congratulations you won!');
//         count = -1;
//         break;
//     }
// }
// if (count === 0) {
//     alert('You lost, the number was: ' + randomNumber);
// }

// teacher version

// const guessNumber = parseInt(Math.random() * 20);
// console.log(guessNumber);
// let userAnswer = prompt('Guess the number, my number biger as 0 and less 20\n to exit enter "q"');
// let maxTryCount = 3;
// let tryCount;

// for (tryCount = 1; tryCount <= maxTryCount; tryCount++) {
//     if (userAnswer == 'q' || userAnswer == null) {
//         alert(`See you next time! Guess number ${guessNumber}`);
//         break;
//     }
//     if (guessNumber == userAnswer) {
//         alert('You win!');
//         break;
//     } else if (userAnswer > guessNumber) {
//         alert(' to big number');
//     } else {
//         alert('to small number');
//     }
//     if (tryCount != maxTryCount) {
//         userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount - tryCount}, try more`)
//     };
// }
// if (tryCount > maxTryCount) {
//     alert(`You loos! Guess number ${guessNumber}`);
// }

const guessNumber = parseInt(Math.random() * 20);
console.log(guessNumber);
let userAnswer = prompt('Guess the number, my number biger as 0 and less 20\n to exit enter "q"');
let maxTryCount = 3;

while (true) {
    if (userAnswer == 'q' || userAnswer == null || maxTryCount == 0) {
        alert(`Gues number ${guessNumber}`);
        break;
    }
    if (guessNumber == userAnswer) {
        alert('You win!!');
        break;
    } else if (guessNumber < userAnswer) {
        alert('to big number');
        maxTryCount--;
    } else {
        alert('to small number');
        maxTryCount--;
    }
    if (maxTryCount != 0) {
        userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount}, try more`)
    }
}
