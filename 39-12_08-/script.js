const library = [
    {
        id:0,
        title: 'Harry Potter',
        author: 'J. Rowling',
        yearIssue: 1995,
        genre: 'Adventure',
        iNumber: 234,
        cover:'https://cdn.pocket-lint.com/r/s/970x/assets/images/150401-tv-feature-harry-potter-image1-vpdnsqfrou-jpg.webp?v1'
    },
    {
        id:1,
        title: 'Lord od the',
        author: 'J. Rowling',
        yearIssue: 1985,
        genre: 'Saga',
        iNumber: 233224,
        cover:'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg'
    },
    {
        id:2,
        title: 'Emma',
        author: 'J. Rowlin Stounesg',
        yearIssue: 1235,
        genre: 'Saga',
        iNumber: 231234,
        cover:'https://images2.medimops.eu/product/970156/M00007350783-large.jpg'

    },

]

const left = document.querySelector('#left'),
    right = document.querySelector('#right');
    
library.forEach((element, index) => {
    const div = document.createElement('div');
    div.id = 'book_' + element.id;
    div.className = 'book';
    div.innerHTML = `<p> ${index + 1}. <span style="font-size: 24px">${element.title}</span>,${element.author}</p>`;
    left.append(div);
});

const books = left.querySelectorAll('.book');
for (book of books) {
    book.onclick = (event) => {
        right.innerHTML= '';
        const id = +event.currentTarget.id.split('_')[1];
        const element = library.find((b) => b.id === id);
        const bookDetail = document.createElement('div');
        bookDetail.className = "bookDetail";
        bookDetail.innerHTML = `<img src=${element.cover} alt=${element.title}>
                <h2>${element.title}</h2>
                <h5>${element.author}</h5>
                <p>years of issue: ${element.yearIssue}, genre: ${element.genre}</p>`;
        right.append(bookDetail);
    }
}
