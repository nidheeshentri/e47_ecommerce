const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    quantity: Number
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel