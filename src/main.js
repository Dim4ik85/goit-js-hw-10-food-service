import menuElements from './menu.json';
import cardTemplates from './templates/template.hbs';
const refs = {
    menuList: document.querySelector('.js-menu'),
    checkbox: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
};
refs.checkbox.addEventListener('click', changeColor);  
function createMenu(array) {
    const createMenuMarkup = array.map(item => cardTemplates(item)).join('');
    refs.menuList.insertAdjacentHTML('beforeend', createMenuMarkup);
}
createMenu(menuElements);
console.log(menuElements);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
function changeColor() {
    if(refs.checkbox.checked) {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', 'dark-theme')
    }
    else {
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme', 'light-theme');
    }       
}

const themeLocalStorage = localStorage.getItem('Theme');
if (themeLocalStorage === Theme.DARK) {
  refs.body.classList.add('dark-theme');
  refs.checkbox.checked = true;
}
  else {
    refs.body.classList.add('light-theme');
}