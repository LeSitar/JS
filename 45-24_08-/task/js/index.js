// # проект messanger
// объект User : {id: 3, name: 'Vasya', city: 'Berlin'}
// массив из трех users :[user1, user2, user3]
//
// массив сообщений: [{
//     id:0,
//     userId:3,
//     title:'Some title',
//     text: 'Some text',
//     data: '01.10.2021'
//     comments:[{}, {}, {}]
// },{},{}]
//
// comment: {
//     id:0,
//         userId:3,
//         postId:0,
//         text: 'some text',
//         data:'05.10.2021
// }
const usersList = document.querySelector('.users-list')
const leftBox = document.querySelector('.left')
const rightBox = document.querySelector('.right');
const users = [
    new User('Vasya Pupkin', 'Berlin'),
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]
const messages = [
    new Message(0, 'Hello', 'World', new Date().toLocaleDateString()),
    new Message(0, 'Aboutdsdsdsd', 'Meeting', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Meeting', '04.02.2021'),
    new Message(2, 'Tektura', 'Info', '04.02.2012'),
    new Message(1, 'Textsssdd', 'Info', '04.02.2012')
]
messages[0].comments.push(new Comment(0, 0, 'very good', new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(1, 0, 'very bad', new Date().toLocaleDateString()));
messages[2].comments.push(new Comment(0, 2, 'nice to see you', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(2, 2, 'bad girl', new Date().toLocaleDateString()));

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}
renderUsersList(users)

usersList.onclick = (event) => {
    if(event.target.tagName === 'H3'){
        //const user = users.find(item => +event.target.dataset.id === item.id)
        const userMessages = messages.filter(message => message.userId === +event.target.dataset.id) 
        // if (!userMessages.length) {
        //     leftBox.innerHTML = "<p>No messages</p>"
        // } else {
        //     leftBox.innerHTML = userMessages.map(item => item.renderMessage()).join('')
        // }
        leftBox.innerHTML = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : "<p>No messages</p>";
    }
}
leftBox.onclick = (event) => {
    let target = event.target;
    if (target.tagName !== 'DIV') {
        target=event.target.parentNode
    }
    const message = messages.find(m => m.id === + target.dataset.message);
    rightBox.innerHTML = (message) ? message.renderFullInfo() : '';
}
function findUserById(id) {
    return users.find(user=> user.id === id)
}

