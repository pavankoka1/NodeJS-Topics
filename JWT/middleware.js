const jwt = require('jsonwebtoken');
const config = (require('./config.js'));

let checkToken = (req, res, next) => {
    try{
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length);
        }

        if(token){
            jwt.verify(token, config.secret, (err, decoded) => {
                if(err){
                    return res.json({
                        success: false,
                        message: 'Token invalid!'
                    });
                }else{
                    req.decoded = decoded;
                    next();
                }
            });
        }else{
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    }catch(err){
        console.log('ERROR: ' + err.message);
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
}

module.exports = {
    checkToken: checkToken
}

process.on('uncaughtException', (err) => {
    console.log('ERROR: ' + err.message);
});