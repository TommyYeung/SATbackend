// const express = require('express');

// const router = express.Router();

// const {Questions} = require("../models")

// router.get("/",async (req, res)=>{
   
//     const allQuestions = await Questions.findAll();
    
//     res.send(allQuestions);
//     res.status(200);
    
    
// });

// router.post("/", async(req,res)=>{
//     const question = req.body
//     await Questions.create(question)
//     res.json(question)

// })

// module.exports = router;


const questionsController = require('../controller/Questions_controller')

const router = require('express').Router()

router.get('/questions',questionsController.getallQuestions)
router.get('/questions/:id',questionsController.getOneQuestion)
router.post('/addQuestions',questionsController.addQuestion)
router.put('/updateQuestions/:id',questionsController.updateOneQuestion)
router.delete('/deleteQuestion/:id',questionsController.deleteQuestion)


module.exports = router;






