const senBtn = document.querySelector('[type=submit]');
const myForm = document.querySelector('#myForm');



console.log(myForm.elements);
console.log(myForm.lastName);//
console.log(myForm.lastName.value);//NoName

console.log(document.forms)//HTMLCollection [form#myForm, myForm: form#myForm]
console.log(document.forms[0])
console.log(document.forms.subscribe);
console.log(myForm.elements[1].attributes);

//===по клику на кнопку send создавать объект user и добавлять в массив users

//=======Version 1
// const users = [];
// document.querySelector('#firstName').focus();


// myForm.onsubmit = (event) => {
//     event.preventDefault();
//     const firstName = event.target.firstName;
//     const lastName = event.target.lastName;
//     const email = event.target.email;
//     const user = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         email: email.value,
//     };
//     users.push(user);
//     firstName.value = '';
//     lastName.value = '';
//     email.value = '';
//     firstName.focus();
//     console.log(users);
// }
//==================Version 2
// const users = [];
// document.querySelector('#firstName').focus();

// myForm.onsubmit = (event) => {
//     event.preventDefault();
//     const firstName = event.target.firstName;
//     const lastName = event.target.lastName;
//     const email = event.target.email;
//     users.push(createUser(firstName, lastName, email));
//     clean(firstName);
//     clean(lastName);
//     clean(email);
//     firstName.focus();
// }

// function createUser(firstName, lastName, email) {
//     return {
//         firstName,
//         lastName,
//         email,
//     }
// }
// function clean(element) {
//     element.value = '';
// }  

//=============Version 3
const users = [];
document.querySelector('#firstName').focus();

myForm.onsubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName;
    const lastName = event.target.lastName;
    const email = event.target.email;
    users.push(createUser(firstName, lastName, email));
    const inputs = myForm.querySelectorAll('input:not([type=submit])');
    clean(inputs);
    firstName.focus();
}

function createUser(firstName, lastName, email) {
    return {
        firstName,
        lastName,
        email,
    }
}
function clean(elements) {
    for (element of elements) {
        element.value = '';
    }
}  