const Product = require("../models/products");
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
const categories = ['fruit', 'vegetables', 'dairy', 'other'];


// get create page
// get /new
router.get('/new', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/create', { product, categories });
});


// post new product to /products/productid
// /products/id/
// from create.ejs
// redirect to /products/new product's id
router.post('/', async (req,res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});



module.exports = router;