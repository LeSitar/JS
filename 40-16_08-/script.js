const userForm = document.querySelector('#usersForm'),
    btnSend = document.querySelector('#submit'),
    usersList = document.querySelector('#users'),
    right = document.querySelector('.right'),
    users = [];


// btnSend.onclick=(event) => {
//     event.preventDefault();
//     const firstName = userForm.querySelectorAll('#firstName');
//     const lastName = userForm.querySelectorAll('#lastName');
//     const age = userForm.querySelectorAll('#age');
//     const city= userForm.querySelectorAll('#city');
//     const email = userForm.querySelectorAll('#email');
//     const phone = userForm.querySelectorAll('#phone');
//     const user = {
//         id:users.length,
//         firstName: firstName.value,
//         lastName: lastName.value,
//         age: age.value,
//         city: city.value,
//         email: email.value,
//         phone: phone.value
//     }
//     users.push(user);

//     firstName.value = '';
//     lastName.value = '';
//     age.value = '';
//     city.value = '';
//     email.value = '';
//     phone.value = '';
//     usersList.innerHTML = '';

//     for (let user of users) {

//         const li = document.createElement('li');
//         li.classList.add('userItem');
//         li.innerHTML=`<h3>${user.firstName} ${user.lastName}</h3>
//                         <p>${user.city}</p>`
//         usersList.append(li);
//     }
// }

btnSend.onclick = (event) => {
    event.preventDefault();
    const user = {
        id: users.length
    };
    const inputs = userForm.querySelectorAll('input');
    for (input of inputs) {
        user[input.id] = input.value;
        input.value = '';
    }
    users.push(user);
    renderUserList()
}
    function renderUserList() {
        usersList.innerHTML = '';
        for (let user of users) {
            const li = document.createElement('li');
            li.classList.add('userItem');
            li.id = `user_${user.id}`;
            const h4 = document.createElement('h4');
            h4.innerHTML = `Name:${user.firstName} ${user.lastName}`;
            const p = document.createElement('p');
            p.innerHTML = `City:${user.city}`
            li.append(h4);
            li.append(p);
            li.onclick = fullInfo;
            usersList.append(li);
        }
    }
//---------Version1
// function fullInfo(event) {
//         const id = +event.currentTarget.id.split('_')[1];
//                 const user = users.find(u => u.id === id);
//                 const avatar = document.createElement('div');
//                 avatar.classList.add('avatar');
//                 const h3 = document.createElement('h3');
//                 h3.innerHTML = `First name: ${user.firstName}, last name: ${user.lastName}`;
//                 const pAge = document.createElement('p');
//                 pAge.innerHTML = `Age: ${user.age}`;
//                 const pCity = document.createElement('p');
//                 pCity.innerHTML = `City:${user.city}`;
//                 const pEmail = document.createElement('p');
//                 pEmail.innerHTML=`E-mail:${user.email}`
//                 const pPhone = document.createElement('p');
//                 pPhone.innerHTML = `Phone:${user.phone}`;
//                 right.innerHTML = '';
//                 right.append(avatar);
//                 right.append(h3);
//                 right.append(pAge);
//                 right.append(pCity);
//                 right.append(pEmail);
//                 right.append(pPhone);
//     }

//=============Version2 

function fullInfo(event) {

    const id = +event.currentTarget.id.split('_')[1];
    const user = users.find(u => u.id === id);
    right.innerHTML = '';
    const userWrapper = document.createElement('div');
    userWrapper.classList.add('user-wrapper');
    userWrapper.innerHTML = `<div class="avatar">
                </div>
                <h3>First name:${user.firstName} <br> Last name:${user.lastName}</h3>
                <p>Age:${user.age}</p>
                <p>City:${user.city}</p>
                <p>E-mail:${user.email}</p>
                <p>Phone: ${user.phone}</p>`;
    right.append(userWrapper);
    setTimeout(()=> userWrapper.style.left='0', 200)
}