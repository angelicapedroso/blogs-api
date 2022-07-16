const express = require('express');
const error = require('./middlewares/error');

// ...

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());

app.use('/login', authRoute);
app.use('/user', userRoute);

app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
