
const navDropdown = document.querySelector('.nav__dropdown-menu')
const dropdownLink = document.getElementById('nav__dropdown__link')


function displayDropdownMenu(){ 
  if (navDropdown.style.opacity === '1'){
    navDropdown.style.opacity = '0'
  }else{
    navDropdown.style.opacity = '1'
  }                
}

dropdownLink.addEventListener('click',displayDropdownMenu)

window.addEventListener('scroll', () => {
  if(window.scrollY > 5){
    navDropdown.style.opacity = '0'
  }
})
















