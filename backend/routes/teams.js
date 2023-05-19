const express = require("express");
const user = require('../models/team');
const router = express.Router();

router.get("/", (req,res,next) => {
    user.find()
        .then(documents =>{
            res.status(200).json({
                message: 'Teams fetched Successfully',
                data: documents
            })
        })
        .catch((err)=>{
            res.json({
                message:"FAIL",
                err: err.message
            })
        })
  })
router.post("/", (req, res, next) =>{
    var newTeam = new user({
        name: req.body.name,
        members: req.body.members
    })
    newTeam.save()
    res.json({message:'CONFIRM'});
})
module.exports = router;