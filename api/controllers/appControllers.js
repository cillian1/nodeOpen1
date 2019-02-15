var Product = require('../models/appModels.js');

exports.list_all_products = function(req, res) {
  Product.getAllproduct(function(err, product) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', product);
    res.send(product);
  });
};



exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);

  //handles null error



  Product.createproduct(new_product, function(err, product) {

    if (err)
      res.send(err);
    res.json(product);
  });

};


exports.read_a_product = function(req, res) {
  Product.getproductById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  console.log(req.body);
  Product.updateById(req.params.productId, new Product(req.body), function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
    Product.remove( req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};
