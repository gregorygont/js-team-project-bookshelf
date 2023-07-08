const BASE_URL = 'https://books-backend.p.goit.global/api-docs/';

const params = {
  categorylist: 'category-list',
  topbooks: 'top-books',
  categoryselected: 'category',
  id: 'bookId',
};

const queryString = new URLSearchParams(params).toString();
const fullUrl = `${BASE_URL}?${queryString}`;
console.log(queryString);

let booksData;

function fetchBooks() {
  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        return response.json();
      }
      throw new Error('Помилка при отриманні даних');
    })
    .then(data => {
      booksData = data;
      //   console.log(fullUrl);
    })
    .catch(error => {
      console.error('Помилка:', error.message);
    });
}
fetchBooks();
console.log(fetch(fullUrl));
console.log(fetchBooks());
