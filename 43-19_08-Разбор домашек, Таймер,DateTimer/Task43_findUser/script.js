const users = [
    {
        userName: 'Vasya Petrov',
        age: 14,
        city: 'London',
        profession: 'teacher'
    },
    {
        userName: 'Petia Petrov',
        age: 22,
        city: 'Berlin',
        profession: 'driver'
    },
    {
        userName: 'Sasha Petrova',
        age: 33,
        city: 'Texas',
        profession: 'vip-zvezda'
    },
    {
        userName: 'Kolia Petro',
        age: 44,
        city: 'Berlin',
        profession: 'teacher'
    },
    {
        userName: 'Vasilisa Petrova',
        age: 55,
        city: 'Irkutsk',
        profession: 'babushka'
    }
],
    findBtn = document.querySelector('.find-button'),
    input = document.querySelector('.input'),
    list = document.querySelector('.list');

for (let i = 0; i < users.length; i++) {
    const object=users.map((user) => `${user.userName}, age: ${user.age}, city: ${user.city}, profession: ${user.profession}`);
    const li = document.createElement('li');
    li.innerHTML = `${object[i]}`;
    list.append(li);
}
findUser();
function findUser() {
    findBtn.onclick = () => {
        list.innerHTML = '';
        for (let i = 0; i < users.length; i++){
            if (input.value.toLowerCase() === users[i].city.toLowerCase()) {
                const foundUser = document.createElement('li');
                foundUser.innerHTML = `${users[i].userName}, age: ${users[i].age}, city: ${users[i].city}, profession: ${users[i].profession}`;
                list.append(foundUser);
            }
        }
    }
}

//test