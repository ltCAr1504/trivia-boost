
const rootStyles = getComputedStyle(document.documentElement)
const colorYellow = rootStyles.getPropertyValue('--color-yellow')
const navbar = document.querySelector('.navbar')
const links = document.querySelectorAll('#nav__link')

navbar.addEventListener('mouseenter', () => {
  navbar.style.backgroundColor = colorYellow
  navbar.style.borderColor = colorYellow
  links.forEach(l => {
    l.style.color = 'white'
  });
})


navbar.addEventListener('mouseleave', () => {
  navbar.style.backgroundColor = '';
  navbar.style.borderColor = ''
  links.forEach(l => {
    l.style.color = ''
  })
})