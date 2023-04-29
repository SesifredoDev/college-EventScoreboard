const express = require("express");
const event = require('../models/event');
const router = express.Router();

router.get("/", (req,res,next) => {
    event.find()
        .then(documents =>{
            res.status(200).json({
                message: 'Events fetched Successfully',
                data: documents
            })
        })
  })


router.post("/", (req, res, next) =>{
    var newEvent = new event({
        name: req.body.name,
        type: req.body.type,
        max: req.body.max,
        subtraction: req.body.subtraction,
        leaderboard: req.body.leaderboard
    })
    newEvent.save()
        .then((data)=>{
            res.json({message:'CONFIRM', data: data});
        })
        .catch((err)=>{
            res.json({
                message:"FAIL",
                err: err.message
            })
        })
})
router.put("/", (req, res, next) =>{
    console.log("put request activated")
    updatedEvent = req.body.event
    event.updateOne({_id:req.body.id}, updatedEvent)
            .then((data)=>{
                res.json({message:'CONFIRM Edited Event'});
            })
            .catch((err)=>[
                res.json({
                    message:"FAIL",
                    err: err.message
                })
            ])
        
})

module.exports = router;