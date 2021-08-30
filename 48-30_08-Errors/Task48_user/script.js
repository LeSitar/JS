// 
const users = [
    {
    name: 'Vaniusha',
    lastName: 'Rizij',
    city: 'Kosmos'
    },
    {
    name: 'Sokol',
    lastName: 'Derevianko',
    city: 'Mars'
    },
    {
    name: 'Kolia',
    lastName: 'Drozdov',
    city: 'Pchelinnik'
    },
    {
    name: 'Slava',
    lastName: 'Petrovic',
    city: 'Peru'
    },
    {
    name: 'Petro',
    lastName: 'Ivanovic',
    city: 'Bern'
    },
]
const wrapper = document.querySelector('.wrapper');
function createUserList(arr) {
    const index = JSON.parse(localStorage.getItem('boxId'));
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        if (i === index) {
        div.style.backgroundColor = 'red'
    }
        div.classList.add('box');
        div.innerHTML = `
    <h2 data-index=${i}>${arr[i].name}</h2>
    <h3>${arr[i].lastName}</h3>
    <p>${arr[i].city}</p>`
        div.onclick = onClickHandler;
        wrapper.append(div);
    }
} 
createUserList(users);
function onClickHandler(e) {
    const box = document.querySelectorAll('div .box');
    box.forEach(e => e.style.backgroundColor = 'cornflowerblue');
    const index = e.target.dataset.index;
    if (e.target.tagName === 'H2') {
        box[index].style.backgroundColor='red'
    }
    localStorage.setItem('boxId', index)
}
