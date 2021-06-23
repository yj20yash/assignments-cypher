const express = require('express');
const adminController = require('../Controllers/Admin-controllers');
const router = express();


//route for Admin signup API.
router.post("/signup",adminController.signup);

//route for Admin login API.
router.post("/login",adminController.login);


module.exports = router;