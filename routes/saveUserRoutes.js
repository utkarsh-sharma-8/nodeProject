const express=require('express');
const router=express.Router();
const saveUserController=require('../controller/saveUserController')
router.post('/saveUser',saveUserController.saveUser);

module.exports=router;