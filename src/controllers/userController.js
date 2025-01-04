const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
var jwt = require('jsonwebtoken');

const saltRounds = Number(process.env.SALT_ROUNDS);
const secretKey = process.env.JWT_SECRET_KEY


const registerController = async (req, res) => {
    const userData = req.body
    bcrypt.hash(userData.password, saltRounds, async function(err, hash) {
        if (hash){
            userData.password = hash
            const newUser = await UserModel.create(userData)
            res.json(newUser)
        }else{
            res.status(400).json({message: "Please provide valid data"})
        }
    });
}

const LoginUser = async (req, res) => {
    const data = req.body

    try{
        const user = await UserModel.findOne({email: data.email})
        const password = data.password
        const userPassword = user.password
        bcrypt.compare(data.password, userPassword, function(err, result) {
            console.log(password);
            console.log(user.password);
            
            if (result){
                var token = jwt.sign({ email: user.email }, secretKey);
                res.json({token})
            }else{
                res.status(401).json({message: "Incorrect password"})
            }
        });
    }catch (err){
        res.status(401).json({message: "Invalid EmailID"})
    }
}

module.exports = {registerController, LoginUser}