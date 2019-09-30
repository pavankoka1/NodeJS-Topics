process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });

process.on('multipleResolves', (type, promise, reason) => {
      console.log();
      console.error(type, promise, reason);
      console.log();
      console.error('Type : ' + type);
      console.log('Promise : ' + promise);
      console.log('Reason : ' + reason);
});

async function myFunc(){

  try{
    return new Promise((resolve, reject) => {
      reject('Oops!');
      resolve('First call');
      resolve('Second call');
      reject('404 Error!');
    }).catch(error => {
      console.log('caught ' + error.message);
      return Promise.reject(error);
    });
  }catch(err){
    console.log('Try Catch Error : ' + err);
  }
}

myFunc().then(data => console.log('Data : ' + data), err => console.log('reject error : ' + err.message)).catch(err => console.log(err.message));

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});
process.on('rejectionHandled', error => {
  console.log('rejection handled', error.message);
});

new Promise((_, reject) => reject(new Error('\'unhandled error message\'')));

process.on('uncaughtException', (err, origin) => {
  console.log(err + ' : ' + origin);
});

process.on('SIGINT', () => {
  console.log('exiting ...');
  process.exit(1);
});

setInterval(() => {console.log('Interval ended')}, 5000);
//callNewFunc();