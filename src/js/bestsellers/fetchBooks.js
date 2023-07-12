import Notiflix from 'notiflix';

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
    return categoriesArray();
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Something went wrong. Please try again');
    console.log(error);
  }
}
