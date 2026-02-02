const express = require('express')
const { loginController, registerController } = require('../controller/userController')
const router = express.Router()

router.get('/login', loginController)
router.get('/register', registerController)

module.exports = router