function makeCounter(){
    let count = 0;
    return function () {
        return count++
    }
}
let counter = makeCounter();
counter();
counter();

let number = counter();
console.log(number);