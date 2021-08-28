function showMessage() {
    console.log('Hello!!')
}


function showMessage(text) {
    console.log(text);
}

showMessage('Hallo');
showMessage('sdfdfs');

let message = 'Hello, world!';
showMessage(message);


alert('')

function showUserMessage(from, text) {
    alert(from + ': ' + text);
}
let userName = 'Vasia';
showUserMessage('Vasia', 'Hallo!');
showUserMessage('Anna', 'Hi! How are you?');

function showPrettyMessage(from, text) {
    from = '*' + from + '*';
    alert(from + ': ' + text);
}

showPrettyMessage(userName, 'Nice to see you!');
alert(userName);

function sum(a, b) {
    let sum = a + b;
    return sum;
}


let result = sum(5, 6);
console.log(sum(20, 30));
console.log(result);

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

function checkAge(age) {
    return (age > 18) ? true : false;
}


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Parents allow?');  // confirm вызовет окно с  кнопкой да или нет .
    }
}

function showMovie(age) {
    if (checkAge(age)) {
        alert('You show movie...')
    } else {
        alert ('No permission')
    }
}
let ageUser = +prompt('enter your age');
showMovie(ageUser);


function learnLanguage(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}
function showText() {
    console.log('T like it');
}

learnLanguage('JavaScript', showText);
learnLanguage('English', function(){console.log("It's very hard")});




const logger = function () {
    console.log('Hello!');
}

logger();
                        1    2  3
function askAgree(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

                // 1                           2                                   3
askAgree('Are you agree?', function () { alert('Yes agree') }, function () { alert("You don't agree") });

const calc = (a, b) => {
    a *= 2;
    b *= 5;
    return a + b;
}

const calc = (a, b) => b - a;

console.log(calc(4, 5));



