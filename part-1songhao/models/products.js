const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name: {
       type: String,
   },
    price: {
       type: Number,
        min: 0,
    },
    category: {
       type: String,
        lowercase: true,
        enum: ['fruit', 'vegetables', 'dairy', 'other'],
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;