const mysql = require('mysql');

module.exports.mobiusdb = mysql.createConnection({
   host : 'localhost',

   user : 'root',
   password: '111111',
   database: 'mobiusdb',
});

module.exports.doorlockdb = mysql.createConnection({
   host : '192.168.0.33:3306',
   user : 'root',
   password: '111111',
   database: 'doorlockdb',
   dateStrings: 'date',
});