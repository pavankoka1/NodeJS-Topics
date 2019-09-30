const express = require('express');
const env = require('dotenv');
const cookieParser = require('cookie-parser');  
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//const logger = require('./middleware/logger.js');
//app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'html')));
app.use('/api', require('./routes/api/requests'));

let server = app.listen(1122, () => {
    console.log('server is listening on port ' + server.address().port);
});