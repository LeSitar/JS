// let a, b;

// if (a)
// if (b) 
//     console.log('a and b both true');

//     else console.log('???');


const login = prompt('Enter your login');
let message;
if (login === 'admin') {
    const password = prompt('enter password');
    if (password === 'boss') {
        message = 'hello boss!';
    } else if (password === null || password === '') {
        message = 'cancelled';
    } else {
        message = 'wrong password'
    }

} else if (login === null || login === '') {
    message = 'cancelled';
} else {
    message = "i don't know you";
}
alert(message);