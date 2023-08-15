const burger_button = document.querySelector('.burger')
const nav_menu = document.querySelector('.contacts__container')

burger_button.addEventListener('click', () => {
    burger_button.classList.toggle('active');
    nav_menu.classList.toggle('active');
})