// import axios from 'axios';
import Notiflix from 'notiflix';

export async function fetchSelectedBooks(category) {
  Notiflix.Loading.dots('Please wait');
  const categoriesArray = async category => {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    const data = await response.json();
    // console.log(data);
    Notiflix.Loading.remove();
    return data;
  };
  try {
    // const { data } = await axios.get(
    //   `https://books-backend.p.goit.global/books/category?category=${category}`
    // );
    Notiflix.Loading.remove();
    // return data;
    return categoriesArray(category);
  } catch (error) {
    Notiflix.Loading.remove();
    Notiflix.Notify.failure('Something went wrong. Please try again');
    console.log(error);
  }
}
