export default class Storage {
  static storeData(list) {
    localStorage.setItem('list', JSON.stringify(list));
  }

  static initiateBooksData() {
    const initialBooks = localStorage.getItem('list' || []);
    if (initialBooks !== undefined) {
      return JSON.parse(initialBooks);
    }
    return initialBooks || [];
  }
}
