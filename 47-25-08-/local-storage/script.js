localStorage.setItem('myKey', [1, 2, 3, 4, 5, 6]) // setItem сохраняем данные по ключу
console.log(localStorage.getItem('myKey')); // getItem забрать даннеы по ключу
localStorage.removeItem('myKey'); // removeItem стереть данные по ключу
localStorage.clear() //удалит все ключи


const user = {
    name: 'Vasya',
    age: 32,
}

localStorage.setItem('user', JSON.stringify(user));/// локалсторадже  понимает только строчки 
//JSNO.tringify преоьазовать в строку     JASON.parse- преобразовать в объект
console.log(user);// {name: "Vasya", age: 32}


const users = [user, user, user]
localStorage.setItem('users', JSON.stringify(users));//[{"name":"Vasya","age":32},{"name":"Vasya","age":32},{"name":"Vasya","age":32}]


const user1 = user;






