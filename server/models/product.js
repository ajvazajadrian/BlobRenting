const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    picture: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    customer: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    availability: {
        type: String,
        default: "available"
    },
    price: {
        type: Number
    },
    condition: {
        type: String
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;