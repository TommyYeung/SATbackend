const db = require('../models')

// create main model
const Questions = db.QuestionsA

//main work

// 1. Create 

const addQuestion = async(req,res)=>{
    let info = {
        questionNumber:req.body.questionNumber,
        question:req.body.question,
        choices:req.body.choices,
        correctAnswer:req.body.correctAnswer,
        questionType:req.body.questionType,
        module:req.body.module,
    }

    const question = await Questions.create(info)
    res.status(200).send(question)
    console.log(question)
}

//2.get all

const getallQuestions =async (req,res)=>{
    let questions = await Questions.findAll({

    })
    res.status(200).send(questions)
}

//3. get single question

const getOneQuestion = async (req,res)=>{
    let _id = req.params.id
    let question = await Questions.findOne({where:{id:_id}})
    res.status(200).send(question)

}

//4. update question

const updateOneQuestion = async (req,res)=>{
    let _id = req.params.id

    let question = await Questions.update(req.body,{where:{id:_id}})
    res.status(200).send(question)

}

//5. delete question by id

const deleteQuestion = async (req,res)=>{
    let _id = req.params.id
    await Questions.destroy({where:{id:_id}})
    res.status(200).send(" Question deleted")

}





module.exports={
    addQuestion,
    getallQuestions,
    getOneQuestion,
    updateOneQuestion,
    deleteQuestion
}
