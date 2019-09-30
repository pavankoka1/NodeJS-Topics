const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
//  req.pipe(res);             This pipes the request to response
  const src = fs.createReadStream('./big.file');
  const des = fs.createWriteStream('./write.file');
/*  src.on('data', (err, data) => {
      console.log('data');
  });
  res.end('data streamed');
  src.on('close', (err, data) => {
       process.exit(0);
  });
*/
/*    src.pipe(des).on('finish', () => {
        res.end('data transfered');
    })
*/

    src.pipe(des);

    setTimeout(() => {
        src.on('readable', () => {
            let data;
            while(data = src.read()){
                console.log('data received length = ' + data.length);
            }
        });
        res.end('file transfered!');
        process.exit(0);
    }, 5000);      
});

server.listen(8000);