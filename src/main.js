
const rootStyles = getComputedStyle(document.documentElement)
const colorYellow = rootStyles.getPropertyValue('--color-yellow')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('#nav__link')
const dropDownLinkBox = document.querySelector('.nav__dropdown')
const dropDownLink = document.getElementById('nav__dropdown__link');
const dropDownBox = document.querySelector('.nav__dropdown-menu')
const historyLink = document.querySelector('.dropdown__link__history')



navbar.addEventListener('mouseenter', () => {
  navbar.style.backgroundColor = colorYellow
  navbar.style.borderColor = colorYellow
  dropDownLink.style.color = 'white'
  links.forEach(l => {
    l.style.color = 'white'
  });
})


navbar.addEventListener('mouseleave', () => {
  navbar.style.backgroundColor = ''
  navbar.style.borderColor = ''
  dropDownLink.style.color = ''
  links.forEach(l => {
    l.style.color = ''
  })
})

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


dropDownLinkBox.addEventListener('mouseenter', () => {
  dropDownLink.classList.add('active')
  navbar.style.borderBottomLeftRadius = '0px'
  navbar.style.borderBottomRightRadius = '0px'
})


dropDownLinkBox.addEventListener('mouseleave', () => {
  dropDownLink.classList.remove('active')
  navbar.style.borderBottomLeftRadius = '10px'
  navbar.style.borderBottomRightRadius = '10px'
})


