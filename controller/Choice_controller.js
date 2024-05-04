const db = require('../models')

// create main model
const Choice = db.Choice
const Question = db.Question

//main work

// 1. Create 

const addChoice = async (req, res) => {


  try {
    const choice = req.body.choice;
    const image = req.body.image;
    const QuestionId = req.body.QuestionId;

    if (!QuestionId) {
      return res.status(400).send({ message: 'QuestionId is required' });
    }

    //check if it is MCQ

    const thisQuestion = await Question.findByPk(QuestionId);

    if (!thisQuestion) {
      return res.status(404).send({ message: 'Question not found' });
    }

    if (thisQuestion.qType !== 'MCQ') {
      return res.status(400).send({ message: 'Choices can only be added to MCQ questions' });
    }

    // Count existing choices for this question
    const existingChoicesCount = await Choice.count({
      where: { QuestionId },
    });
console.log(existingChoicesCount)
    if (existingChoicesCount >= 4) {
      return res.status(400).send({ message: 'Maximum of 4 choices allowed per MCQ question' });
    }


    const newChoice = await Choice.create({

      choice: choice,
      image: image,
      QuestionId: QuestionId,
    },
    );

    res.status(201).send(newChoice);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error creating ChoiceSet' });
  }
}

//2.get all

const getAllChoice = async (req, res) => {
  let info = await Choice.findAll({

  })
  res.status(200).send(info)
}

//3. get single Choice

const getOneChoice = async (req, res) => {
  let _id = req.params.id
  let info = await Choice.findOne({ where: { id: _id } })
  res.status(200).send(info)

}

//4. update Choice

const updateOneChoice = async (req, res) => {
  let _id = req.params.id

  let info = await Choice.update(req.body, { where: { id: _id } })
  res.status(200).send(info)

}

//5. delete Choice by id

const deleteChoice = async (req, res) => {
  let _id = req.params.id
  await Choice.destroy({ where: { id: _id } })
  res.status(200).send(" Choice deleted") 

}

//6 thisQuestionChoice

const thisQuestionChoice = async(req,res)=>{
  let _id = req.params.id
 
  let allChoice = await Choice.findAll({ where: { QuestionId: _id } })

  if (!allChoice) {
    return res.status(404).send({ message: 'No questions found for this Question Set' });
  }

  res.status(200).send(allChoice)
  console.log(allChoice)

}



module.exports = {
  addChoice,
  getAllChoice,
  getOneChoice,
  updateOneChoice,
  deleteChoice,
  thisQuestionChoice,
}
