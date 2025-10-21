const express=require('express')
const router=express.Router()
const {registersUser,loginUser}=require("../controllers/authController")

router.post('/signup',registersUser)
router.get('/login',loginUser)

module.exports=router
