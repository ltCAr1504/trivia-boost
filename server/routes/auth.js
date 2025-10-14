const { Router } = require('express')
const router = Router()
const { loginUser, signupUser } = require('../controllers/authController.js')

router.post('/login', loginUser)
router.post('/signup', signupUser)


exports.isAuthenticated = () => {
    return !!localStorage.getItem('token')
}

exports.logOut = () => {
    localStorage.removeItem('token')
    return window.location.href('/')
}


module.exports = router


