const nav = document.querySelector('.nav'),
    root = document.querySelector('#root'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    form = document.querySelector('.form');
contacts = [
    // {
    // userName:'Vasya Petrov',
    // phone:111111221,
    // email:'vasia@mail.com',
    //     city: 'London',
    // description:'teacher'
    // },
    // {
    // userName:'Petia Petrov',
    // phone:2222222222,
    // email:'petia@mail.com',
    //     city: 'Berlin',
    // description:'driver'
    // },
    // {
    // userName:'Sasha Petrova',
    // phone:3333333333333,
    // email:'sasha@mail.com',
    //     city: 'Texas',
    // description:'vip-zvezda'
    // },
    // {
    // userName:'Kolia Petro',
    // phone:444444444,
    // email:'kolia@gmx.com',
    //     city: 'Berlin',
    // description:'teacher'
    // },
    // {
    // userName:'Vasilisa Petrova',
    // phone:555555555,
    // email:'vasilisa@gmail.com',
    //     city: 'Irkutsk',
    // description:'babushka'
    // }  
];
    nav.onclick = function(event){
    event.preventDefault();
    if(event.target.getAttribute('href') === 'contacts') renderContacts();
        if (event.target.getAttribute('href') === 'addContacts') addNewContact();
}

function renderContacts() {
    document.querySelector('#contactsBtn').classList.add('active');
    document.querySelector('#addContactBtn').classList.remove('active');
    left.style.display = 'block';
    document.querySelector('.form').classList.add('hidden');
    left.innerHTML=`<div class="left-contacts">
                    <h2>${contacts.userName}</h2>
                    <p>${contacts.phone}</p>
                    <img src="./img/trash.png" alt="trash-icon" class="left-icon">
                </div>`
    right.style.display = 'block';
    right.innerHTML=` <div class="right-full-contact">
                    <h2>${contacts.userName}</h2>
                    <p><img class="icon" src="./img/technology.png" alt=""> ${contacts.phone}</p>
                    <p><img class="icon" src="./img/multimedia.png" alt="multimedia-icon"> ${contacts.email}</p>
                    <p><img class="icon" src="./img/buildings.png" alt="buildings-icon"> ${contacts.city}</p>
                    <p>${contacts.description}</p>
                </div>`
}

function addNewContact() {
    document.querySelector('.form').classList.remove('hidden');
    document.querySelector('#contactsBtn').classList.remove('active');
    document.querySelector('#addContactBtn').classList.add('active');
    left.style.display = 'none';
    right.style.display = 'none';
    form.innerHTML = '';
    const contactForm = document.createElement('form');
    contactForm.innerHTML = `
                    <input type="text" id="userName" placeholder="type name">
                    <br>
                    <input type="number" id="phone" placeholder="type phone">
                    <br>
                    <input type="email" id="email" placeholder="type email">
                    <br>
                    <input type="text" id="city" placeholder="type address">
                    <br>
                    <input type="text" id="description" placeholder="type description">
                    <br>
                    <button type="submit" name="submit" id="submit">Add</button>`
    form.append(contactForm);
    const addBtn = document.querySelector('#submit');
        // userName = document.querySelector('#userName'),
        // phone = document.querySelector('#phone'),
        // email = document.querySelector('#email'),
        // city = document.querySelector('#city'),
        // description = document.querySelector('#description');
    addBtn.onclick = (event) => {
        event.preventDefault();
        const user = {
            id: contacts.length
        };
        const inputs = contactForm.querySelectorAll('input');
        for (input in inputs) {
            user[input.id] = input.value;
        input.value = '';
        }
        contacts.push(user);
        renderContacts();
    }
}
console.log(contacts);




    


    // const user = {
    //     id:contacts.length,
    //     userName: userName.value,
    //     phone: phone.value,
    //     email: email.value,
    //     city: city.value,
    //     description: description.value
    // }
    // contacts.push(user);
    // for (let user of contacts) {
    // const leftContacts = document.createElement('div');
    // leftContacts.classList.add('left-contacts');
    // leftContacts.innerHTML=`<h2>${user.userName}</h2>
    //                 <p>${user.phone}</p>
    //                 <img src="./img/trash.png" alt="trash-icon" class="left-icon">`
    // left.append(leftContacts);
    // }

