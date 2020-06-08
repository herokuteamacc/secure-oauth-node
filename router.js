const authController = require('./controllers/auth');

const db  = require('./models/index'); //for db connection  
module.exports.set = (app) => {
	app.get('/api/user', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        //console.log(db);
        let data = db.User.findOne({}).then(d => {
            res.send(JSON.stringify(d));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({'error':err}));
        })
    });

    app.post('/api/login', authController.login);
    app.post('/api/register', authController.register);
    //app.get('/api/posts', postController.post);
    //app.post('/api/authenticate', authToken.addAuthToken);
    //app.post('/api/validate',authToken.validateAuthToken);
}