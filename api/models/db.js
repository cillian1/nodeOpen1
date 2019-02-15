var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: 'cilliandb.ctbcnu6bs24s.us-east-1.rds.amazonaws.com',
  user: 'cillian',
  password: 'cillian1',
  database: 'productsDB'
});

connection.connect(function(err) {
    if (err) throw err;
   });

module.exports = connection;
