const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'postgres',
  port: 5432,
});

let getUsers = (req, res) => {
    pool.query('SELECT * from users ORDER BY id ASC', (err, data) => {
        if(err){
            console.log('error occured connecting to database!');
            console.log('ERROR: ' + err.message);
        }
        try{
            res.status(200).json(data.rows);
        }catch(err){
            console.log('error occured in queries data!');
            console.log('ERROR: ' + err.message);
        }
    });
}

module.exports.getUsers = getUsers;