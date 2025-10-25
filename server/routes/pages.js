const { Router } = require('express')
const router = Router();
const path = require('path');




router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'public', 'pages', 'index.html'));
});

router.get('/dashboard', (req,res) => {
  res.sendFile(path.join(__dirname, '../..','public','pages','dashboard.html'))
})

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'public', 'pages', 'login.html'));
  
});


router.get('/signup', (req,res) => {
  res.sendFile(path.join(__dirname, '..','..', 'public','pages','signup.html'))
})


module.exports = router;