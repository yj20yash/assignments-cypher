// Other libraries importing
const express = require('express');

// Self created functions/files/classes
const userController = require('../Controllers/User-controllers');


const router = express();

//route for signup API
router.post("/signup",userController.signup);

//route for login API
router.post("/login",userController.login);

//route for getUser by Email API
router.get("/search/email/:email",userController.getUserByEmail);

//route for getUser by _id API
router.get("/search/id/:id",userController.getUserByID);

//route for postBlog API
router.post("/postBlog",userController.postBlog);

//route for getBlog by userId API
router.get("/searchBlog/userId/:userId",userController.getUserByuserId);

module.exports = router;