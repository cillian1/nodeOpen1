var sql = require('./db.js');

//Product object constructor
var product = function(product){
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
};
product.createproduct = function createUser(newProduct, result) {
        sql.query("INSERT INTO Products set ?", newProduct, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};
product.getproductById = function createUser(ProductId, result) {
        sql.query("Select * from products where id = ? ", ProductId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};
product.getAllproduct = function getAllproduct(result) {
        sql.query("Select * from Products", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Products : ', res);

                 result(null, res);
                }
            });
};
product.updateById = function(id, Product, result){
  sql.query("UPDATE products SET name = ?, stock= ?, price= ? WHERE id = ?", [Product.name,Product.stock,Product.price, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};
product.remove = function(id, result){
     sql.query("DELETE FROM Products WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports= product;
