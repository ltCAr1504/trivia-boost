const { isAuthenticated } = require('../../server/routes/auth.js')

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); 
});


if(isAuthenticated()){
  window.location.href('/dashboard')
}











