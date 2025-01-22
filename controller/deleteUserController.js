const userModel=require('../models/userModel');

const removeUser=async(req,res)=>{
    try{
        const { email }=req.body;
        if(!email){
            return res.status(400).json({message:"Email Is Required"});
        }
        const result=await userModel.deleteUser(email);
        return res.status(200).json({
            result,
            message:"User Deleted Successfully",
        })
    }catch(error){
        return res.status(500).json({message:`Internal Server Error: ${error}`})
    }
}

module.exports={removeUser};