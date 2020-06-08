const express = require('express');
const { errors } = require('celebrate');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(errors());


app.listen(3000, () => {
  console.log('Server is running on port 3000');
})