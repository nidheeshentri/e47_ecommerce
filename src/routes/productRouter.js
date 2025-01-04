const express = require("express")
const mongoose = require("mongoose")
const {getAllProducts, createProduct} = require("../controllers/productController")

const router = express.Router()

router.get("/all-products", getAllProducts)

router.post("/create-product", createProduct)

module.exports = router