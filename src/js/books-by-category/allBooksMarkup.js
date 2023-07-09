import { createBookMarkup } from '../_shared/oneBookMarkup';

export function makeCategoryBooksMarkup(data) {
  return `
      <ul class="category-books-list">
        ${data
          .map(element => {
            return `
            <li class="books-list-item">
              ${createBookMarkup(element)}
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
}
