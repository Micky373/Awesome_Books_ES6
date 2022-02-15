let books;

// add data to local storage
function addToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const book1 = new Book('title1', 'author1', '001');
const book2 = new Book('title2', 'author2', '002');
const book3 = new Book('title3', 'author3', '003');

books = [book1, book2, book3];

// add event listner to newly added book remove button
let removeBtn = document.querySelectorAll('.remove');

function removeBook(ref) {
  const result = books.filter((value) => value.id !== ref);
  books = result;
  addToLocalStorage(books);
}

function addEvents() {
  removeBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      const ref = e.target.id;
      removeBook(ref);
      e.target.parentElement.remove();
    });
  });
}

// populate dom with the list
const addBtn = document.querySelector('#add-btn');
function showBooks(list) {
  const booksListDiv = document.querySelector('#Book_Lists');
  for (let i = 0; i < list.length; i += 1) {
    const div = document.createElement('div');
    const pTitle = document.createElement('p');
    pTitle.innerHTML = `"${list[i].title}" by ${list[i].author}`;
    div.appendChild(pTitle);
    const btn = document.createElement('button');
    btn.className = 'remove';
    btn.innerHTML = 'Remove';
    btn.id = list[i].id;
    div.appendChild(btn);
    div.className = 'book_lists';
    booksListDiv.appendChild(div);
  }
  removeBtn = document.querySelectorAll('.remove');
  addEvents();
}
const listClass = document.getElementById('List');
const addNewClass = document.getElementById('Add_new');
const contactClass = document.getElementById('Contact');

// add book to the list
function addBook() {
  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  if (bookTitle && bookAuthor) {
    const book = new Book(bookTitle, bookAuthor, (Date.now().toString()));
    books.push(book);
    showBooks([book]);
    addToLocalStorage(books);
    document.querySelector('form').reset();
    listClass.classList.remove('none');
    addNewClass.classList.add('none');
    contactClass.classList.add('none');
  }
}
addBtn.addEventListener('click', addBook);
window.onload = () => {
  if (localStorage.getItem('data') === null) {
    showBooks(books);
  } else {
    const localBooks = JSON.parse(localStorage.getItem('data'));
    showBooks(localBooks);
    books = localBooks;
  }
};

// Nav bar responsive

const jumpToList = document.getElementById('jump_to_list');
const jumpToAddNew = document.getElementById('jump_to_add_new');
const jumpToContact = document.getElementById('jump_to_contact');
jumpToList.addEventListener('click', () => {
  listClass.classList.remove('none');
  addNewClass.classList.add('none');
  contactClass.classList.add('none');
});
jumpToAddNew.addEventListener('click', () => {
  listClass.classList.add('none');
  addNewClass.classList.remove('none');
  contactClass.classList.add('none');
});
jumpToContact.addEventListener('click', () => {
  listClass.classList.add('none');
  addNewClass.classList.add('none');
  contactClass.classList.remove('none');
});

// Adding date
const dateDisplay = document.getElementById('date');
dateDisplay.innerHTML = Date();
