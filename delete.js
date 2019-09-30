const fs = require('fs');

try{
    fs.unlinkSync('./text.txt');
}catch(err){
    console.log(err.message);
}