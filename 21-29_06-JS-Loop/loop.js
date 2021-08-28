// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');
// console.log('Hello!');

//========While========Пока
// let count = 5;
// while (count > 0) {
//     console.log('Hello!');
//     count--; //чтобы остановить цикл, делает на 1 единицу каждый раз меньше
// }
//count ->4
// let b = count--; //b-> 4; count->3
// b = --count; //b-> 2 count->2

let i = 3;
while (i) {
    alert(i); //alert(i--);
    i--;
}

//=======Do while====

// let j = 0;
// do {
//     alert(j);
//     j++;
// } while (j < 4);

// let numbLarge50;
// do {
//     numbLarge50 = prompt('enter number > 50');
// } while (numbLarge50 <= 50 && numbLarge50);


// =========For======

// let i = 1

// for (let i = 1,  j = 5; j>  0; i++, j--){
//     alert('i = ' + i + 'j= '+ j );
// }

// =====break && continue====

// let sum = 0;
// while (true) {
//     let value = +prompt('enter number'); //null-> 0 false ; ''-> 0 false ; 'wew'-> NaN  false, '5' ->5->True
//     if (!value) {
//         break;
//     }
//     sum += value;

// }
// alert('summe is: ' + sum);


// for (let i = 0; i < 5; i++){
//     if (i == 3) continue; 
//     alert(i);
// }


//==============
// num --> 5;
// summe = 1 + 2 +3 + 4+ 5;
// let number, summe= 0;

// do {
//     number = +prompt('enter number > 0');
// } while (isNaN(number) || number <= 0);
// for (let i = 1; i <= number; i++){
//     summe += i;
// }
// alert(summe);

// // ================
// // способ получить рэндомное число 
// let answear = parseInt(Math.random() * 10);
// alert(answear);

// let a = 2.3345543;
// alert('Hello \nworld!' + a.toFixed(2)); //вывести цифры до 2 запятой  2.33