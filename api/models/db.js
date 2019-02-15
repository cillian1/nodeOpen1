var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
 host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
 user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
 password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
 port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
 database : process.env.OPENSHIFT_APP_NAME

});
connection.connect(function(err) {
    if (err) throw err;
   });

module.exports = connection;
