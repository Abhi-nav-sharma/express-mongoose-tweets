const express= require('express')
const { createTweet } = require('../controllers/tweet.controller')
const { getUsers, deleteUSer, updateUser, createUser } = require('../controllers/user.controller')
const validateUser = require('../utils/validateUser')
const router= express.Router()

router.get('/',getUsers)

router.post('/',...validateUser(),createUser)

router.delete('/delete/:user_id',deleteUSer)

router.patch("/update/:user_id",updateUser)

module.exports= router