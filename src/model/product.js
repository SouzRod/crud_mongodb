const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    brand: { type: String },
    model: { type: String },
    price: { type: Number },
}, {
    _id: false
});

module.exports = mongoose.model('Product', productSchema);