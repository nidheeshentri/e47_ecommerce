const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    count: {type: Number, default: 1},
    productID: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
})

const CartModel = mongoose.model("cart", CartSchema)

module.exports = CartModel