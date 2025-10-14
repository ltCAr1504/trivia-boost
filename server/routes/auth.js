const { Router } = require('express')
const router = Router()
const { loginUser, signupUser } = require('../controllers/authController.js')

router.post('/login', loginUser)
router.post('/signup', signupUser)


module.exports = router


