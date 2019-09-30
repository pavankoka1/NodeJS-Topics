const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config');
const middleware = require('./middleware');

class HandlerGenerator {
    login(req, res) {
        let userrname = req.body.username;
        let password = req.body.password;

        let mockedusername = 'admin';
        let mockedpassword = 'password';

        if(userrname && password){
            if(userrname === mockedusername && password === mockedpassword){
                let token = jwt.sign({username: userrname},
                    config.secret,
                    {
                        expiresIn: '24h'
                    });
                res.json({
                    success: true, 
                    message: 'Authentication Successful!',
                    token: token
                });    
            }else{
                res.send(403).json({
                    success: false,
                    message: 'Incorrect Username or Password!'
                });
            }
        }else{
            res.send(400).json({
                success: false,
                message: 'Authenication Failed, Please check the request!'
            });
        }
    }
    index (req, res) {
        res.json({
            success: true,
            message: 'Index Page'
        })
    }
}

function main(){
    const app = express();
    let handlers = new HandlerGenerator();
    const port = 8440;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.post('/login', handlers.login);
    app.get('/', middleware.checkToken, handlers.index);

    app.listen(port, () => console.log('Server is listening on port ' + port + ' ...'));
}

main();

process.on('uncaughtException', (err) => {
    console.log('ERROR: ' + err.message);
});