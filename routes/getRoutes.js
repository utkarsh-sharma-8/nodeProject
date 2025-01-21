const express=require('express');
const router=express.Router();
const getItemController=require('../controller/getItemController')
router.get('/getItem',getItemController.getUser);

module.exports= router;