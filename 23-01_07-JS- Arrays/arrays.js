//let arr = new Array();
    //        [0]    [1] [2] [3]      [4]          [5]
let arr = ['plum.png', 1, {}, [], 'orange.png', 'apple.jpg'];


console.log(arr[0]);
console.log(arr);

console.log(arr.length);  // количество  элеентов в массиве 

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
arr[arr.length] = 'banana.jpg'; // arr[6]= 'banana.jpg';
console.log(arr);


arr.length = arr.length - 1; //чтобы убрать 1 элемент
console.log(arr);

for (let i = arr.length; i > 0; i--){
    arr[i] = arr[i - 1];
}
arr[0] = 'banan.jpg';
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);

arr.push('banan.jpg', 23, 'melone.jpg');   //добавить элемент в конец массива
console.log(arr);

arr.pop(); //удаление из массива

arr.unshift(25, 30)  //добавдение  элементов
console.log(arr);

let number = arr.shift();
//======================================================================

let numbers = [1, 2, 3, 4, 5];

// умножаем все цифры в два раза
for (let i = 0; i< numbers.length; i++){
    console.log(numbers[i] * 2);
}

console.log('-----------------------')

// приплюсовываем ко всем числам  делящимся на 2 + 5

for (let number of numbers) {   
    if (number % 2 == 0) {
        console.log(number + 5);
    }
}

//====================== таблица умножения
let res = '';

//1 2 3 4 5 6 7 8 9 10
//2 4 6 8 10 12 14 16 18 20

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++) {
        res += (j * i+'\t')
        //arr [i][j]
    }
    console.log(res);
    res = ''
}


let matrix = [
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9]  //2
]
console.log(matrix[1][1]);    //добераемся до птерки
)
// ДОМАШКА ===========================================================================================================
                            // [*1]                        [*2]  
let pifagorTable = [[1,2,3,4,5,6,7,8,9,10], [2,4,6,8,10,12,14,16,18,20], [], [], [], [], [], [], [], [],]

//заполнить массив  таблицей умножения  в первом масиве  результат умноения на 1, во втором   результаты умножения на 2 и т.д.

// pifagorTable[4][4]--->  через консоль лог должно вывестись 25  5*5


//сделать таблицу  Pifagor в браузере *
document.write('<h1 style="text-align: center" >Multiply table</h1>');
document.write('<table border="1" cellspacing="0" cellpadding="5" align="center">')
for (let i = 1; i <= 5; i++){
    document.write('<tr>');
    for (let j = 1; j <= 5; j++) {
        document.write('<td width = "100px">Hello!</td>')
    }
    document.write('</tr>');
}
document.write('</table>');

// =======================================================================================================================