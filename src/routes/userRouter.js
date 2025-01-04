const express = require("express")
const {registerController, LoginUser} = require("../controllers/userController")

const router = express.Router()

router.post("/register", registerController)
router.post("/login", LoginUser)

module.exports = router