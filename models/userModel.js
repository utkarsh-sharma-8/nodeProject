const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    age: {type:Number, required:true}
});

const User=mongoose.model('User',userSchema);

const saveUser=async({email,name,age})=>{
    try{
    const user=new User({name,email,age});
    const result=await User.collection.insertOne({email,name,age});
    if (result.acknowledged) {
        console.log('User inserted with ID:', result.insertedId);
        return { success: true, id: result }; // Return success and the inserted ID
    } else {
        throw new Error('Failed to insert user');
    } 
    }catch (error){
        throw new Error(`error thrown from userModel is: ${error}`)
    }
}
const findUser=async()=>{
    try{
        return await User.find();
    }catch(error){
        throw new Error(`Error fetching users: ${error.message}`);
    }
}

const deleteUser=async(email)=>{
    try{
        const result=await User.collection.deleteOne({email});

        if(result.acknowledged) {
            return {success: true,id:result.insertedId};
        }else{
            throw new error(`Failed To Delete User`);
        }
    }catch(error){
        throw new Error(`Error Deleting User: ${error}`);
    }
}
module.exports={saveUser, findUser, deleteUser};