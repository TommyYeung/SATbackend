const express = require('express');

const router = express.Router();

const {Questionsss} = require("../models")

router.get("/",async (req, res)=>{
   
    const allQuestions = await Questionsss.findAll();
    
    res.send(allQuestions);
    
    
});

router.post("/", async(req,res)=>{
    const question = req.body
    await Questionsss.create(question)
    res.json(question)

})

module.exports = router;