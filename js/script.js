let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
let headerInfo = document.querySelector('.header__info');
let headerPopup = document.querySelector('.header__popup');
let enterLogin = document.querySelector('.enter__login');
let login = document.querySelector('.login');
let header = document.querySelector('.header');
let body = document.getElementsByTagName('body');
let loginClose = document.querySelector('.login__close');
let headerItem = document.getElementsByClassName('service__item_header');

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
})

headerInfo.addEventListener('click', function () {
    headerPopup.classList.toggle('_active')
})

enterLogin.addEventListener('click', function (e) {
    e.preventDefault();
    login.classList.add('_active');
    header.classList.add('_active');
    body.classList.add('_active');
})

loginClose.addEventListener('click', function (e) {
    e.preventDefault();
    login.classList.remove('_active');
    header.classList.remove('_active');
    body.classList.remove('_active');
})

for (let i = 0; i < headerItem.length; i++) {
    headerItem[i].addEventListener('click', function (e) {
        headerItem[i].classList.toggle('_active')
        let wrapper = headerItem[i].nextElementSibling;
        if (wrapper.style.maxHeight) {
            wrapper.style.maxHeight = null
        } else {
            wrapper.style.maxHeight = wrapper.scrollHeight + 'px'
        }
    })
}
