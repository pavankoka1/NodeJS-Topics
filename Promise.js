const fs = require('fs');

let myFunc = () => {
    return new Promise( (resolve, reject) => {
        fs.readFile('./fork.js', (err, data) => {
            if(err){
                reject(err);
            }else{
                const lines = data.toString().split(" ");
                resolve(lines);
            }
        });
    });
}

myFunc().then(text => {
    console.log(text);
}).catch(err => {
    console.log(err);
});