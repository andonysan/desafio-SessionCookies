const express = require('express');
const router = express.Router();
const {index, processLogin, dashboard, logout, about} = require('../controllers/indexController')
const loginValidator = require('../validator/loginValidator')


/* GET home page. */
router.get('/', index);
router.post('/processLogin', loginValidator,processLogin);
router.get('/dashboard', dashboard);
router.get('/about', about);
router.get('/logout', logout);


module.exports = router;
