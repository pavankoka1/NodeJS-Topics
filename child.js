const cp = require('child_process');

const exec_options = {
    cwd: null,
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200*1024,
    killSignal: 'SIGTERM'
};

cp.exec('ls -l', exec_options, (err, stdout, stderr) => {
    console.log('#1 exec');
    console.log(stdout);
});

try{
    const data = cp.execSync('ls -l', exec_options);
    console.log('#2 execSync');
    console.log(data);
}catch(err){
    console.log('ERROR: ', err);
}

const spawn_options = {
    cwd: null,
    env: null,
    detached: false
};

const ls = cp.spawn('ls', ['-l'], spawn_options);

ls.stdout.on('data', stdout => {
    console.log('#3 spwan')
    console.log(stdout.toString());
});

ls.stderr.on('data', stderr => {
    console.log(stderr.toString());
});

ls.on('close', code => {
    console.log('closing spawn child ... ', code);
});

ls.on('exit', code => {
    console.log('exiting child process ... ', code);
});

const { stdout, stderr, pid, status} = cp.spawnSync('ls', ['-l'], spawn_options);
console.log('#4 spawnSync');
console.log(stdout + pid + " " + status);

setTimeout( () => {
    process.stdout.write('Timout statement excecuted ... \n');
}, 1000);