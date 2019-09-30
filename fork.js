const cp = require('child_process');

let fork_obj = {
    cwd: '../../Documents/NodeJS'
};

let child = cp.fork('spawn.js', ['asdf'], fork_obj);

child.on('exit', () => {
    console.log('Child terminated!');
});