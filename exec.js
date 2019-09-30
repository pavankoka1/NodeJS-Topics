const cp = require('child_process');

exec_obj = {
    cwd: '../../Documents/NodeJS'
}

let child = cp.exec('node example.js', exec_obj, (err, stdout, stderr) => {
    if(err){
        console.log(`${err.name} ${err.message} ${err.stack}`);
    }else{
        console.log(stdout);
    }
});