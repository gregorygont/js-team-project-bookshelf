import getRefs from '../refs';
const { mainTitle } = getRefs();

export function renderMainTitle(id) {
  //
  const allWordsButLast = id.split(' ').slice(0, -1).join(' ');

  const words = id.split(' ');
  const lastWord = words[words.length - 1];

  mainTitle.innerHTML = `${allWordsButLast} <span class="main-title--last-word-static">${lastWord}</span>`;
}
