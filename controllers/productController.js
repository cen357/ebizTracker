const Product = require('../models/product');
const { body, validationResult } = require('express-validator');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of products.
exports.product_list = function(req, res) {
    res.send('NOT IMPLEMENTED: product list');
};

// Display detail page for a specific product.
exports.product_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
};

// Display product create form on GET.
exports.product_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product creaote GET');
};

// Handle product create on POST.
/*exports.product_create_post = [
    body('title', 'Title must not be empty.').trim().isLength({ min: 1}).escape(),
    (req, res) => {
        const errors = validationResult(req);

        const product = new Product(
            {
                title: req.body.title
            }
        );
        
        if (!errors.isEmpty()) {
            console.log("Error in title");
            return;
        } else {
            product.save(function (error) {
                if (error) { res.status(400).json('Error: ' + error); }
                    
                res.json("product added");
                return;
            });
        }
    }
];*/

exports.product_create_post = function(req, res) {
    
    const title = req.body.title;
    const newProduct = new Product({
        title,
    });

    newProduct.save()
    .then(() => res.json('Product added'))
    .catch(err => res.status(400).json('Error in adding product'));
};

// Display product delete form on GET.
exports.product_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete GET');
};

// Handle product delete on POST.
exports.product_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete POST');
};

// Display product update form on GET.
exports.product_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: product update GET');
};

// Handle product update on POST.
exports.product_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: product update POST');
};
