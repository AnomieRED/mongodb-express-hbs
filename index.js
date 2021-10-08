require('dotenv').config();
const express = require('express');
const mongoose = require('./connection/mongodb');
const exhbs = require('express-handlebars');
const router = require('./routers/router');
const app = express();

const PORT = process.env.SERVER_PORT || 8080;

const hbs = exhbs.create({
	defaultLayout: 'main',
	extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}`);
});
