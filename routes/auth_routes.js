const express = require('express');
const router = express.Router();
const { register, login, logout, forgotPassword, resetToken, updateUser, readUsers, updateUserAdmin} = require('../controllers/auth_controller');
// const { createProfile } = require('../controllers/profile_controller');
const { authRedirect } = require('../middleware/auth_mw')
const { isAdmin, isLoggedIn } = require('../utils/auth_utils')
// router.get('/register', authRedirect ,registerNew)

router.post('/register', register)
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgot_password', forgotPassword)
router.get('/reset/:token', resetToken)
router.put('/:token',updateUser)
router.get('/', isLoggedIn, isAdmin, readUsers)
router.put('/',updateUserAdmin)

module.exports = router