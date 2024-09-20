const User = require("../model/user-model");
const bcrypt = require('bcryptjs');

// For home:

const home = async (req, res) =>{

    try {
        res
        .status(200)
        .send("welcome to home using controller")
    } catch (error) {
        console.error(error);
        
    }
}

// for register
const register = async (req, res) => {
    try {

        const { username, email, password, phone } = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message: "Email already exist"})
        }


        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({username, email, password: hash_password, phone});

        res
        .status(201)
        .json({message:"Register Sucessfull", token: await userCreated.generateToken(), userId: userCreated._id.toString()});
        
    } catch (error) {
        console.error(error);
        
    }
}

// for login:

const login = async (req, res) =>{


    try {
        const { email, password} = req.body;
        const userExist = await User.findOne({email});

        if(!userExist){
            res
            .status(400)
            .json({message: "Invalid credentail"});
        }
        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if(isPasswordValid){
            res
            .status(200)
            .json({message: "Login Sucessfull", token: await userExist.generateToken(), userId: userExist._id.toString()})
        }
    } catch (error) {
        res.status(401).json({message: "invalid Credentail"});
    }
}

module.exports = {home, register, login};