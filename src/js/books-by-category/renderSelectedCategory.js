export function renderBooksByCategory(data) {
  const markup = makeCategoryBooksMarkup(data);
  renderingContainer.innerHTML = markup;
}
