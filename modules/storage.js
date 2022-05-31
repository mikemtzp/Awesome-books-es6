export default class Storage {
  static storeData(list) {
    localStorage.setItem('bookList', JSON.stringify(list));
  }

  static initiateBooksData() {
    const initialBooks = localStorage.getItem('bookList');
    if (initialBooks !== undefined) {
      return JSON.parse(initialBooks);
    }
    return [];
  }
}
