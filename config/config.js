const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'db4free.net',
    user: 'pruebapedro',
    password: '!4U.VVHpUeGW4zx',
    database: 'pruebatecnica'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('DATABASE CONNECTED!');
});

module.exports = db;