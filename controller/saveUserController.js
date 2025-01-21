const saveUserModel=require('../models/userModel')
const saveUser=async(req,res)=>{
    const {email,name,age}=req.body;
    if(!email){
        return res.status(400).json({message:"Email is Required"});
    }
    if(!name){
        return res.status(400).json({message:"Name is Required"});
    }
    if(!age){
        return res.status(400).json({message:"Age is Required"});
    }
    try{
    
    
    const result=await saveUserModel.saveUser({email:email,name:name,age:age});
    console.log(`user credentials are: ${result}`);
    return res.status(201).json({
        message: "User created successfully",
        data: result,
      });
    }catch(error){
        console.log(`error is: ${error}`);
        return res.status(500).json({message:`Internal Server Error: ${error}`});
    }
}

module.exports={ saveUser };