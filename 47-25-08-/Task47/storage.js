const CONTACTS_KEY = 'CONTACTS';

class Store {
    static save(contact) {
        return this.getAll().then(res => {
            return new Promise(resolve => {
                setTimeout(() => {
                    res.push(contact);
                    this.updateLocalStorage(res);
                    resolve(res)
                }, 1000)
            })
        })
    }
    static getAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                let str = localStorage.getItem(CONTACTS_KEY);
                const contacts = (str) ? JSON.parse(str) : [];
                resolve(contacts);
            }, 1000)
        })
    }
    static updateLocalStorage(contacts) {
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
    }
    static remove(index) {
        Store.getAll().then(contacts => {
            let currentContact = contacts;   // зачем вам здесь переменная currentContact? вам по хорошему отсюда нужно отдавать укороченный массив, а в app.js его уже сохранять в currentContact и вызывать после этого renderConatcts
            currentContact.splice(index, 1);
            if (contacts.length === 0) {
                localStorage.removeItem(CONTACTS_KEY)
            } else {
                this.updateLocalStorage(contacts)
            }
        });
    }
}

