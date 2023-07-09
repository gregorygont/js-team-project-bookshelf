const themeSwitcherEl = document.querySelector('.switcher-theme');
themeSwitcherEl.checked = false;
console.log(themeSwitcherEl);
function onHandlerClick() {
  if (themeSwitcherEl.checked) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
themeSwitcherEl.addEventListener('click', onHandlerClick);

window.onload = checkTheme();

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme');

  if (localStorageTheme !== null && localStorageTheme === 'dark') {
    document.body.classList = localStorageTheme;
    themeSwitcherEl.checked = true;
  }
}