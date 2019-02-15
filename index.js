const express = require('express');
const app = express();
const body_parser = require('body-parser')
const urlencoded_parser = body_parser.urlencoded({ extended: true});
const mysql = require('mysql');

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_adress = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const mc = mysql.createConnection({
    host: 'cilliandb.ctbcnu6bs24s.us-east-1.rds.amazonaws.com',
    user: 'cillian',
    password: 'cillian1',
    database: 'productsDB'
});


mc.connect();

app.get('/backr',(req,res)=>{
  res.sendFile(__dirname+'/backr.jpg');
  console.log(__dirname);
});
var routes = require('./api/routes/appRoutes'); //importing route
routes(app); //register the route

//app.listen(8081);
app.listen(server_port,server_ip_adress,function(){
console.log("Listening on " +server_ip_adress+ ", server port is " + server_port);
})
//console.log("Server listening on port 8081");
