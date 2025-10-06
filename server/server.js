const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'index.html'));
});

app.get('/dashboard', (req,res) => {
  res.sendFile(path.join(__dirname, '..','public','pages','dashboard.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'pages', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
