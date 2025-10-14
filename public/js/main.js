const { isAuthenticated } = require('../../server/routes/auth')

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); 
});


if(isAuthenticated()){
  return window.location.href('/dashboard')
}








