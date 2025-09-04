
const rootStyles = getComputedStyle(document.documentElement)
const colorGrayBlack = rootStyles.getPropertyValue('--color-grayBlack')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('#nav__link')
const dropDownLink = document.getElementById('nav__dropdown__link');
const dropDownBox = document.querySelector('.nav__dropdown-menu')





dropDownLink.addEventListener('mouseenter', () =>{
  navbar.style.borderBottomLeftRadius = '0px'
  navbar.style.borderBottomRightRadius = '0px'
})

dropDownLink.addEventListener('mouseleave', () => {
  navbar.style.borderBottomLeftRadius = '10px'
  navbar.style.borderBottomRightRadius = '10px'
})

dropDownBox.addEventListener('mouseenter', () => {
  navbar.style.borderBottomLeftRadius = '0px'
  navbar.style.borderBottomRightRadius = '0px'
})

dropDownBox.addEventListener('mouseleave', () => {
  navbar.style.borderBottomLeftRadius = '10px'
  navbar.style.borderBottomRightRadius = '10px'
})






