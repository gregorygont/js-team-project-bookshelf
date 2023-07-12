import Notiflix from 'notiflix';
// import axios from 'axios';

export default async function getTopBooksArray() {
  Notiflix.Loading.dots();
  // Notiflix.Loading.pulse();

  try {
    // const { data } = await axios.get(
    //   'https://books-backend.p.goit.global/books/top-books'
    // );
    const response = await fetch(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const data = await response.json();
    Notiflix.Loading.remove();

    return data;
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Something went wrong. Please try again');
    console.log(error);
  }
}
