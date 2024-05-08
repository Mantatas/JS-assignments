let currentYear = 2024

const books = [
    { category: 'fiction', isbn: '9780345391803', releaseYear: 1996, title: 'A Game of Thrones', pages: 694 },
    { category: 'fiction', isbn: '9780743273565', releaseYear: 2005, title: 'Harry Potter and the Half-Blood Prince', pages: 652 },
    { category: 'fiction', isbn: '9780061120084', releaseYear: 2007, title: 'The Name of the Wind', pages: 662 },
    { category: 'non-fiction', isbn: '9780545010221', releaseYear: 2005, title: 'The Elements of Style', pages: 105 },
    { category: 'non-fiction', isbn: '9780307277671', releaseYear: 2011, title: 'Steve Jobs', pages: 630 },
    { category: 'non-fiction', isbn: '9780143105826', releaseYear: 2007, title: 'The Omnivore\'s Dilemma', pages: 450 },
    { category: 'poetry', isbn: '9780307264886', releaseYear: 2004, title: 'Ariel', pages: 224 },
    { category: 'poetry', isbn: '9780571222960', releaseYear: 1966, title: 'Selected Poems', pages: 304 },
    { category: 'poetry', isbn: '9780571225398', releaseYear: 2024, title: 'The Waste Land and Other Poems', pages: 64 },
    { category: 'fiction', isbn: '9780654654321', releaseYear: 2008, title: 'Ballad of the Drunkard', pages: 59 },
    { category: 'fiction', isbn: '9780546623218', releaseYear: 1999, title: 'Witcher', pages: 612 },
    { category: 'poetry', isbn: '9780321321564', releaseYear: 2022, title: 'The Time Waster', pages: 254 },
];

function countBooks(category) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].category === category) {
            count++;
        }
    }
    return count;
}

function isNewBook(book) {
    return book.releaseYear === currentYear ? ' (new book)' : '';
}

books.forEach(book => {
    console.log(`${book.title} (${book.category}) - ISBN: ${book.isbn}, Pages: ${book.pages}, Release Year: ${book.releaseYear}${isNewBook(book)}`);
});

const category = prompt ('category?')
console.log(`${category} kategorijos yra: ${countBooks(category)} knygu(-os)`);
