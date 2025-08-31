
// import { cloudinaryInstance } from "../config/cloudinary.js";

import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import { generateToken } from "../utils/token.js";

const NODE_ENV = process.env.NODE_ENV

export const userSignup = async (req,res,next) => {
    try {
        // collect user data
        const {name,email,mobile,password,confirmPassword,profilePic}=req.body;

        //data validation
        if (!name || !email || !mobile || !password || !confirmPassword ) {
            return res.status(400).json({message:"Please fill in all required fields"})
        }
        // console.log(name,email,mobile,password);
        
       if (password !== confirmPassword) {
            return res.status(400).json({message:"Passwords do not match"})
        }

        // check if user already exists
        const userExist = await User.findOne({email})
        if (userExist) {
            return res.status(400).json({message:"User already exists!"})
        }

        // Assign role (default to "user" if not provided)
        // const userRole = role || "user";

        // hash pswd
        const hashedpswd = bcrypt.hashSync(password, 10);

        // Create new user
        const newUser = new User({ name, email, mobile, password: hashedpswd, profilePic })
        await newUser.save()

        // generate token using id and role
        const token = generateToken(newUser._id, newUser.role)
        // res.cookie("token", token)
        res.cookie("token", token, {
            sameSite: NODE_ENV === "production" ? "None" : "Lax",
            secure: NODE_ENV === "production",
            httpOnly: NODE_ENV === "production",
        });

        // const { password: _, ...userData } = newUser._doc;
        res.json({data:newUser, message:"Sign up success. Account created"})
        console.log("user signup success");
        
    } catch (error) {
       console.log(error);
       res.status(500).json({ message: 'Server Error', error: error.message });       
    }
}

export const userLogin = async (req,res,next) => {
    try {
        
        // collect user data
        const {email,password}=req.body;

        //data validation
        if (!email || !password ) {
            return res.status(400).json({message:"Please fill in all required fields"})
        }
        
        // check if user already exists
        const userExist = await User.findOne({email})
        if (!userExist) {
            return res.status(404).json({message:"User not found!"})
        }

        // password match with DB
        const passwordMatch = bcrypt.compareSync(password, userExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "invalid login credentials" });
        }     
        
        if (!userExist.isActive) {
            return res.status(401).json({ message: "user account is in-active" });
        }

        // generate token
        const token = generateToken(userExist._id, userExist.role);
        
        res.cookie("token", token, {
            sameSite: NODE_ENV === "production" ? "None" : "Lax",
            secure: NODE_ENV === "production",
            httpOnly: NODE_ENV === "production",
        });

        delete userExist._doc.password;
        res.json({data:userExist, message:"Login success"})
        console.log("user login success");
        
    } catch (error) {
       console.log(error);
       res.status(500).json({ message: 'Server Error', error: error.message });       
    }
}

export const userProfile = async (req,res,next) => {
    try {
        //user Id
        const userId = req.user.id;
        const userData = await User.findById(userId).select("-password");

        res.json({ data: userData, message: "user profile fetched" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const userLogout = async (req,res,next) => {
    try {        
        
        res.clearCookie("token",{
            path: "/",
            sameSite: NODE_ENV === "production" ? "None" : "Lax",
            secure: NODE_ENV === "production",
            // httpOnly: NODE_ENV === "production",
            httpOnly: true,
        })
        res.json({message:"You have been logged out!"})

    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
}

export const checkUser = async (req,res,next) => {
    try {          
        res.json({message:"User is authorized!"})

    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server" });
    }
}