import getRefs from '../refs';
const { colorSwitcher, colorSwitcherSlider } = getRefs();


function presetSwitcher() {
  const isSaved = localStorage.getItem('dark-color-scheme');

  if (!isSaved) return;
  if (isSaved === 'false') return;

  colorSwitcher.checked = true;
}

function setColorScheme() {
  if (colorSwitcher.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

function updateLocalStorage(checkbox) {
  localStorage.setItem('dark-color-scheme', checkbox.checked);
}



function activateColorSchemeSwitcher() {
  presetSwitcher();
  setColorScheme();

  colorSwitcher.addEventListener('change', onChange);
  setTimeout(() => {
    colorSwitcherSlider.classList.add('animated');
  }, 100);
}

function onChange(event) {
  setColorScheme();
  updateLocalStorage(event.currentTarget);
}


activateColorSchemeSwitcher();
