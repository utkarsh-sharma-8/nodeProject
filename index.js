const express=require('express');
const mongoose=require('mongoose');
const getRoutes=require("./routes/getRoutes")
const saveUserRoutes=require('./routes/saveUserRoutes.js');
const app=express();
const PORT =3000;
mongoose.connect(`mongodb://localhost:27017/utkarshNew`,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log(`MongoDb Connected`))
.catch((error)=>console.error(`Error connecting Mongo DB: ${error.message}`));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',getRoutes);
app.use('/api',saveUserRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})
