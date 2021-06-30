const express = require("express");
const postController = require("../controller/postController");

router = express();

router.get("/getPosts", postController.getPosts);
router.get("/getComments", postController.getComments);

module.exports = router;
