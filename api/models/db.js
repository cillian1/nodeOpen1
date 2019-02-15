var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: 'mysql://' + process.env.OPENSHIFT_MYSQL_DB_HOST + ':' + process.env.OPENSHIFT_MYSQL_DB_PORT + '/',
    user: process.env.OPENSHIFT_MYSQL_DB_USERNAME,
    password: process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
    database: 'productsDB'
  
});
connection.connect(function(err) {
    if (err) throw err;
   });

module.exports = connection;
