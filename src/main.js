
const navDropdown = document.querySelector('.nav__dropdown-menu')
const dropdownLink = document.getElementById('nav__dropdown__link')
const arrowIcon = document.getElementById('arrow__img')


function displayDropdownMenu(){ 
  if (navDropdown.style.opacity === '1'){
    navDropdown.style.opacity = '0'
    arrowIcon.style.transform = 'rotate(0deg)'
  }else{
    navDropdown.style.opacity = '1'
    arrowIcon.style.transform = 'rotate(-180deg)'
  }                
}

dropdownLink.addEventListener('click',displayDropdownMenu)

window.addEventListener('scroll', () => {
  if(window.scrollY > 5){
    navDropdown.style.opacity = '0'
    arrowIcon.style.transform = 'rotate(0deg)'
  }
})

document.addEventListener('click', (e) => {
  if (!navDropdown.contains(e.target) && e.target !== dropdownLink) {
    navDropdown.style.opacity = '0'
    arrowIcon.style.transform = 'rotate(0deg)'
  }
})

















