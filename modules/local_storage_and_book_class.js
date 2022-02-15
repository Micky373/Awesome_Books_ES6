export function addToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}