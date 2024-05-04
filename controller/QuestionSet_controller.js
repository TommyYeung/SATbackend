
const db = require('../models')
const Teacher = require('../models/Teacher')


const QuestionSet = db.QuestionSet
const Question = db.Question



const addQuestionSet = async (req, res) => {
    try {
      const teacherID = req.body.TeacherId;
      const questionSetNo = req.body.questionSetNo;
      const title = req.body.title;
      const description = req.body.description;
  
      if (!teacherID) {
        return res.status(400).send({ message: 'TeacherID is required' });
      }
  
      const newQuestionSet = await QuestionSet.create({
        TeacherId: teacherID,
        questionSetNo: questionSetNo,
        title: title,
        description: description,
        
      }, 


      
      );
  
      res.status(201).send(newQuestionSet); 
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error creating QuestionSet' });
    }
  };









//2.get all

const getAllQuestionSet =async (req,res)=>{
    let questionSet = await QuestionSet.findAll({

    })
    res.status(200).send(questionSet)
}

//3. get single question

const getOneQuestionSet = async (req,res)=>{
    let _id = req.params.id
    let questionSet = await QuestionSet.findOne({where:{id:_id}})
    res.status(200).send(questionSet)

}

//4. update question

const updateOneQuestionSet = async (req,res)=>{
    let _id = req.params.id

    let questionSet = await QuestionSet.update(req.body,{where:{id:_id}})
    res.status(200).send(questionSet)

}

//5. delete question by id

const deleteQuestionSet = async (req,res)=>{
    let _id = req.params.id
    await QuestionSet.destroy({where:{id:_id}})
    res.status(200).send(" Question deleted")

}

//6. get all q in the same questionSet

const getAllQuestionInThisQuestionSet = async (req,res)=>{
  let _id = req.params.id

  

  let questionInQuestionSet = await Question.findAll({ where: { QuestionSetId: _id } })

  if (!questionInQuestionSet) {
    return res.status(404).send({ message: 'No questions found for this Question Set' });
  }

  res.status(200).send(questionInQuestionSet)
  console.log(questionInQuestionSet)

}

module.exports={
    addQuestionSet,
    getAllQuestionSet,
    getOneQuestionSet,
    updateOneQuestionSet,
    deleteQuestionSet,
    getAllQuestionInThisQuestionSet,
}