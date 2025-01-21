const userModel=require('../models/userModel')
const getUser=async (req,res)=>{
    try{
    const users=await userModel.findUser();
    if(users.length>0){
        res.status(200).json({message:"Users found",success:true,data:users});
    }else{
        res.status(404).json({message:"No users found",success:false});
    }
    }catch(error){
        console.log(`error is :${error}`);
        res.status(500).json({
            success:false,
            error:error.message

        })
    }
}

module.exports={getUser}