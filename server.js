var http = require('http');
const cp = require('child_process');
require('dotenv').config();

const args = require('minimist')(process.argv.slice(2));

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(process.env.PORT);

console.log('listening on port ' + process.env.PORT);
/*
process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});
  
process.on('exit', (code) => {
   console.log('Process exit event with code: ', code);
});

process.on('uncaughtException', (error) => {
    console.log('uncaught Exception ' + error);
});
  
console.log('This message is displayed first.');
*/