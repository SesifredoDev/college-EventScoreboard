const express = require("express");
const user = require('../models/post');
const router = express.Router();

router.get("/", (req,res,next) => {
    user.find()
        .then(documents =>{
            res.status(200).json({
                message: 'Posts fetched Successfully',
                posts: documents
            })
        })
  })
module.exports = router;