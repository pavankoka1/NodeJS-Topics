const cp = require('child_process');

let child_obj = {
    cwd: '../../Documents/NodeJS',
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200*1024,
    killSignal: 'SIGTERM'
};

if(process.argv.length > 2){
    let child = cp.spawn('node', ['spawn'], child_obj);

    child.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    child.stderr.on('data', (data) => {
        console.log(`data: ${data}`);
    });

    child.on('exit', () => {
        console.log('exiting the process id: ', child.pid);
    });

    child.on('error', (err) => {
        console.log('error occured: ', err);
    });
}else{
    let child = cp.spawn('ls', ['-l'], child_obj);

    child.stdout.on('data', (data) => {
        console.log(`data: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.log(`data: ${data}`);
    });

    child.on('exit', () => {
        console.log('exiting the process id: ', child.pid);
    });

    child.on('error', (err) => {
        console.log('error occured: ', err);
    });
}

console.log('process exiting : ', process.pid);