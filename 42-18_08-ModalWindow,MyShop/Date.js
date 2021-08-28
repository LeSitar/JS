// const now = new Date();

// console.log(now); //Wed Aug 18 2021 09:34:47 GMT+0200 

// const now = new Date('2020-05-01');
// console.log(now); //Fri May 01 2020 02:00:00 GMT+0200 

const now1 = new Date(2020,5,1);
console.log(now1); //Mon Jun 01 2020 00:00:00

const now = new Date();
console.log(now.getFullYear());//2021
console.log(now.getMonth());//7
console.log(now.getDate());//18
console.log(now.getDay());//3
console.log(now.getHours());//9
console.log(now.getUTCHours());//7
console.log(now.getTimezoneOffset());//-120  разница времени по грнивичу
console.log(now.getTime());//1629273335104  количество милисекунд от даты 01.01.1970

// now.setHours(20);
// console.log(now);//Wed Aug 18 2021 20:57:03 GMT+0200 
now.setHours(40);
console.log(now);//Thu Aug 19 2021 16:58:58 GMT+0200 

//=============Можем проверить сколько длится процесс выполнения задания 

//Version 1============создаётся полноценный объекь, под который выделяется место 
// const start = new Date(); //  начало процесса  дата 
// for (let i = 0; i < 100000; i++){
//     let some=i**3
// }
// const end = new Date(); // конец процесса
// console.log(`time is: ${end - start} millisecond`); //time is: 49 millisecond  

//Version 2============в данном случае объект не создаётся ,  мы экономим пространство 
const start = Date.now(); 
for (let i = 0; i < 100000; i++){
    let some=i**3
}
const end = Date.now();
console.log(`time is: ${end - start} millisecond`) //time is: 36 millisecond

// =========================================

//´======Узнаем сколько соталось временим до  DeadLine ================
const deadLine = new Date('2021-12-31');
console.log(deadLine);
console.log(new Date());
const daysLeft = (deadLine - new Date());
console.log(daysLeft);

const days =Math.floor( daysLeft / (24 * 60 * 60 * 1000)) //Пример для 10 дней : 10-> 10 * 24 * 60 * 60 * 1000  узнаем сколько милисекунд в 10 днях
console.log(days);//134  дней 
const hours = Math.floor((daysLeft / (60 * 60 * 1000))%24);
console.log(hours);//15  часов
const minutes = Math.floor((daysLeft / (60 * 1000)) % 60);
console.log(minutes);
const seconds=Math.floor((daysLeft / (1000)) % 60);
console.log(days, hours, minutes, seconds);
//======================================================================

