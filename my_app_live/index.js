// node init, npm install express mongoose...
// tambien instalar ejs
// iniciar node index.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use("", require('./routes/routes'));

// app.get('/', (req, res) => {
//   res.send(' WorlHellod');
// });


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});