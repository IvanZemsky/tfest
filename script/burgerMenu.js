const burgerBtn = document.getElementById('burger')
const closeMenuBtn = document.getElementById('closeMenuBtn')
const menu = document.getElementById('menu')

const menuLinks = menu.querySelectorAll('a')

burgerBtn.addEventListener('click', () => {
   menu.classList.add('header__nav--opened')
})

closeMenuBtn.addEventListener('click', () => {
   menu.classList.remove('header__nav--opened')
})

menuLinks.forEach((link) => {
   link.addEventListener('click', () => {
      menu.classList.remove('header__nav--opened')
   })
})