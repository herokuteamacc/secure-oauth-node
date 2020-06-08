const path = require('path');
const express = require('express'); 
const app = express();
const dotenv = require('dotenv');
const router = require('./router');
const bodyParser = require('body-parser');
const config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

router.set(app);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.use('/', express.static(__dirname + '/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => console.log('App listening on port '+ PORT));