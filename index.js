console.log('Start of the point');
const path = require('path');
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));



const express = require('express');
const app = express();
//const dotenv = require('dotenv');
const router = require('./router');
const bodyParser = require('body-parser');
const config = require('./config');

console.log('Done all requirements');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
router.set(app);
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => console.log('App listening on port '+ PORT));
