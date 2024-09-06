import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
export const Signup = async(req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"The user is already registered."})
        }
        //password encryption
        const hashpassword= await bcryptjs.hash(password,10);
        //if user doesn't exist
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashpassword,
        });
        await createdUser.save();
        res.status(201).json({message:"User created",
            user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
            email:createdUser.email,
            
            },
        });

    }catch(error){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const Login = async(req,res)=>{
    try{
        const {email,password} =req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!user||!isMatch){
            return res.status(400).json({message:"Invalid username or password.Enter again."})
        }
        else{
            res.status(200).json({message:"Login successfull",
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
            })
        }
    }
    catch(error){

        console.log("Error: "+error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}