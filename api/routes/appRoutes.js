module.exports = function(app) {
  var productList = require('../controllers/appControllers');

  // todoList Routes
  app.route('/products')
    .get(productList.list_all_products)
    .post(productList.create_a_product);

   app.route('/products/:productId')
    .get(productList.read_a_product)
    .put(productList.update_a_product)
    .delete(productList.delete_a_product);

    app.get('/listproducts',(req,res)=>{
          res.sendFile(__dirname + '/public/listproducts.html');
        });
};
