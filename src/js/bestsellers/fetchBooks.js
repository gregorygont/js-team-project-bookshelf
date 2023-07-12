import Notiflix from 'notiflix';
// import axios from 'axios';

export default async function getTopBooksArray() {
  Notiflix.Loading.dots();
  // Notiflix.Loading.pulse();
  const categoriesArray = async () => {
    const response = await fetch(
      'https://books-backend.p.goit.global/books/top-books'
    );
    const data = await response.json();
    // console.log(data);
    Notiflix.Loading.remove();
    return data;
  };
  try {
    // const { data } = await axios.get(
    //   'https://books-backend.p.goit.global/books/top-books'
    // );
    // const response = await fetch(
    //   'https://books-backend.p.goit.global/books/top-books'
    // );
    // const data = await response.json();

    // // console.log(data);
    // return data;

    return categoriesArray();
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Something went wrong. Please try again');
    console.log(error);
  }
}
