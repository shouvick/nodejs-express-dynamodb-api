var exports = module.exports = {},
dynamoose = require('dynamoose'),
Product = dynamoose.model('Product');

exports.save = function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let price = req.body.price;
    let quantity = req.body.quantity;

    let product = new Product({
        id,
        name,
        description,
        price,
        quantity
    });

  product.save(function (err, p) {
    if(err) {
      return res.status(500).json({'error' : 'error saving product'});
    } else {
      res.json(p);
    }
  });
};

exports.getById = function (req, res) {
  let id = req.params.id;
  Product.get(id, function (err, product) {
    if(err) {
      return res.status(500).json({'error' : 'error getting products'});
    }
    res.json(product);
  });
};

exports.delete = function (req, res) {
  let productId = req.params.id;
  Product.delete({id: productId}, function (err) {
    if(err) {
      return res.status(500).json({'error' : 'error deleting product'});
    }
    res.json({'status' : 'product deleted successfully'});
  });
};

exports.update = function (req, res) {
  let productId = req.params.id;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;
  let quantity = req.body.quantity;
  let product = new Product({
    productId,
    name,
    description,
    price,
    quantity
  });
  Product.update({id: productId}, product, function (err) {
    if(err) {
      console.log(err);
      return res.status(500).json({'error':'error updating product'});
    }
    res.json({'status' : 'product updated successfully'});
  });
};