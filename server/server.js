const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/pages')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('dev'))
app.use(router)
