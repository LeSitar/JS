//Task01
//fill the Pifagor-table
//*make the Pifagor-table for the browser

// Task01

document.write('<h1 style="text-align: center">Multiply tabele</h1>')
document.write('<table border= "1" cellspacing="0" cellpading="5" align="center">')
let res = '';
let pifagorTabele = [];
for (let i = 1; i <= 10; i++) {
    pifagorTabele.push([]);
    document.write('<tr style="text-align: center">')
    for (let j = 1; j <= 10; j++) {
        pifagorTabele[i - 1].push(j * i);
        res += (j * i)
        document.write(`<td width="100px">${i * j}</td>`)
    }
    document.write('</tr>')
}
    console.log(pifagorTabele);
document.write('</table>');



//Task02
//С помощью цикла сформируйте строку n...9 8 7 6 5 4 3 2 1, где n - число получаемое от пользователя. 
//выведите значение этой переменной на экран.

// Task02
let repeat = true;
while (repeat) {
    let userNumber = +prompt('Enter the number please');
    let i = userNumber;
    let res = 0;

    if (userNumber === 0) {
        alert('Thank you! Good bye!');
        repeat = false;
    }
    else if (Number.isInteger(userNumber)) {
        while (i >= 1) {
            res = res + i + ',';
            console.log(i);
            i--;
        }
        alert('Test finished!'+res);
        repeat = false;
    }
    else {
        alert('Enter the number please!');
        repeat = true;
    }
}


//Task03*
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))
//Натуральное число, большее 1, называется простым, если оно делится на себя и на 1. (То есть таки числа как 2, 3, 5, 7, 11, 13 и тд)



// Не решено!
// let start = 10;

// for (let i = 2; i <= start; i++) {
//     if (i % 2 === 0) {
//     console.log(i);
//     }
// }

