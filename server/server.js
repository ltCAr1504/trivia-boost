require('dotenv').config()
const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const pagesRoutes = require('./routes/pages.js')
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const apiUsers = require('./routes/auth.js')


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(morgan('dev'))


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connect to MongoDB Atlas'))
  .catch(err => console.error('Connection Error!', err))


app.use(pagesRoutes)
app.use('/api', apiUsers)
app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', 'pages', 'pageNotFound.html'))
})
