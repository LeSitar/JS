const right = document.querySelector('.right'),
    form = document.querySelector('#contact-form'),
    listLoader = document.querySelector('.lds-dual-ring');

let currentContact = [];
showListLoader(false);
loadList();
form.onsubmit = onAddContactHandler;


function loadList() {
    showRightBox(false)
    showListLoader(true);
    Store.getAll().then(contacts => {
        showListLoader(false);
        currentContact = contacts;
        showRightBox(true)
        renderList();
    });
}

function renderList() {
    right.innerHTML = currentContact.map(mapToRow).join('');
    const buttons = right.querySelectorAll('button');
    buttons.forEach(b=> b.onclick=onRemoveContactHandler)
}

function mapToRow(contact, index) {
    return`
    <div>
    <h2>${contact.name} ${contact.lastName}</h2>
    <h4>${contact.phone}</h4>
    <p>${contact.email}</p>
    <br>
    <button data-index= ${index}>remove</button>
    </div>
    `
}


function onAddContactHandler(e) {
    e.preventDefault();
    const form = e.target;
    const contact = new Contact(
        form.name.value,
        form.lastName.value,
        form.phone.value,
        form.email.value
    )
    showListLoader(true);
    showRightBox(false);
    Store.save(contact).then(res => {
        currentContact = res;
        showListLoader(false)
        renderList();
        showRightBox(true);
        form.reset(); //очистит все  value
    });

    
    
}
function onRemoveContactHandler(event) {
    const index = +event.target.dataset.index;
    Store.remove(index);
    renderList();
    loadList();
}

function showListLoader(isShow) {
    listLoader.style.display = isShow ? 'block' : 'none'
}

function showRightBox(isShow) {
    right.style.display=isShow ? 'block' : 'none'
}