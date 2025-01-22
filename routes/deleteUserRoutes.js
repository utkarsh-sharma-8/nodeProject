const express=require('express');
const deleteUserController=require('../controller/deleteUserController')
const router=express.Router();
router.post('/delete',deleteUserController.removeUser)

module.exports =router