console.log('Inside router');
const authController = require('./controllers/auth');
console.log('Declared authcontroller - router.js');
const db  = require('./models/index'); //for db connection  
const checkauth = require('./middlewares/authorization');
console.log('required db - router.js');

module.exports.set = (app) => {
	//console.log('Will I be just called?');
	app.get('/api/user', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        console.log('inside api user method');
        let data = db.User.findOne({}).then(d => {
            res.send(JSON.stringify(d));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({'error':err}));
        })
    });
	console.log('After api user , Before login and register');
    app.post('/api/login', authController.login);
    app.post('/api/register', authController.register);
    app.get('/api/is-verify', checkauth, async (req, res) => {
        try {
            res.json(true);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
            
        }
    });
}
