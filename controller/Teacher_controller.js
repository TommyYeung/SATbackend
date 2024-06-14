const db = require('../models')

// create main model
const Teacher = db.Teacher
const QuestionSet = db.QuestionSet



//main work

// 1. Create 

const addTeacher = async(req,res)=>{
    let info = {
        teacherName:req.body.teacherName,
        image:req.body.image,
        userType:req.body.userType,
        password:req.body.password,
        email:req.body.email,
        
    }

    const teacher = await Teacher.create(info)
    res.status(200).send(teacher)
    console.log(teacher)
}

//2.get all

const getAllTeacher =async (req,res)=>{
    let info = await Teacher.findAll({

    })
    res.status(200).send(info)
}

//3. get single question

const getOneTeacher = async (req,res)=>{
    let _id = req.params.id
    let info = await Teacher.findOne({where:{id:_id}})
    res.status(200).send(info)

}

//4. update question

const updateOneTeacher = async (req,res)=>{
    let _id = req.params.id

    let info = await Teacher.update(req.body,{where:{id:_id}})
    res.status(200).send(info)

}

//5. delete question by id

const deleteTeacher = async (req,res)=>{
    let _id = req.params.id
    await Teacher.destroy({where:{id:_id}})
    res.status(200).send(" Question deleted")

}

//6. get all question set by teacher id

const getAllQuestionSetInThisTeacherId = async(req,res)=>{
    let _id = req.params.id
    let questionSetInTeacherId = await QuestionSet.findAll({ where: { TeacherId: _id } })

    if (!questionSetInTeacherId) {
      return res.status(404).send({ message: 'No questions found for this Question Set' });
    }
  
    res.status(200).send(questionSetInTeacherId)
    console.log(questionSetInTeacherId)
  
}



module.exports={
    addTeacher,
    getAllTeacher,
    getOneTeacher,
    updateOneTeacher,
    deleteTeacher,
    getAllQuestionSetInThisTeacherId,
}
