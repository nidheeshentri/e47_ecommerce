const mongoose = require("mongoose")

const WishlistSchema = new mongoose.Schema({
    productID: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
})

const WishlistModel = mongoose.model("wishlist", WishlistSchema)

module.exports = WishlistModel