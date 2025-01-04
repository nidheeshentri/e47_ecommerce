const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    count: {type: Number, default: 1},
    productID: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    isPaid: Boolean,
    orderStatus: String
})

const OrderModel = mongoose.model("cart", OrderSchema)

module.exports = OrderModel