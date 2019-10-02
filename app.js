const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('./setupMongoose');

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

router(app);
mongoose();

app.listen(3000, () => console.log('Listening 3000'));

