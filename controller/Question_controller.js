const db = require('../models')

// create main model
const Question = db.Question

//main work

// 1. Create 

const addQuestion = async(req,res)=>{
    // let info = {
    //     question:req.body.question,
    //     image:req.body.image,
    //     module:req.body.module,
    //     qType:req.body.qType,
    //     correctAnswer:req.body.correctAnswer,
    //     QuestionSetId:req.body.QuestionSetId,
        
    // }

    // const q = await Question.create(info)
    // res.status(200).send(q)
    // console.log(q)

    try {
        const question = req.body.question;
        const image = req.body.image;
        const module = req.body.module;
        const qType = req.body.qType;
        const correctAnswer = req.body.correctAnswer;
        const QuestionSetId = req.body.QuestionSetId;
    
        if (!QuestionSetId) {
          return res.status(400).send({ message: 'QuestionSetId is required' });
        }
    
        const newQuestion = await Question.create({
            
            question: question,
            image:image,
            module:module,
            qType:qType,
            correctAnswer:correctAnswer,
            QuestionSetId:QuestionSetId,
          }, 
        );
    
        res.status(201).send(newQuestion); 
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating QuestionSet' });
      }
}

//2.get all

const getAllQuestion =async (req,res)=>{
    let info = await Question.findAll({

    })
    res.status(200).send(info)
}

//3. get single question

const getOneQuestion = async (req,res)=>{
    let _id = req.params.id
    let info = await Question.findOne({where:{id:_id}})
    res.status(200).send(info)

}

//4. update question

const updateOneQuestion = async (req,res)=>{
    let _id = req.params.id

    let info = await Question.update(req.body,{where:{id:_id}})
    res.status(200).send(info)

}

//5. delete question by id

const deleteQuestion = async (req,res)=>{
    let _id = req.params.id
    await Question.destroy({where:{id:_id}})
    res.status(200).send(" Question deleted")

}





module.exports={
    addQuestion,
    getAllQuestion,
    getOneQuestion,
    updateOneQuestion,
    deleteQuestion
}
