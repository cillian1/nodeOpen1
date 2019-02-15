var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: 'mysql://mysql:3306/',
  user: 'userV38',
  password: 'C6hiyMap6Pac05H8',
  database: 'productsDB'
});

connection.connect(function(err) {
    if (err) throw err;
   });

module.exports = connection;
