const questionSetController = require('../controller/QuestionSet_controller')

const router = require('express').Router()

router.post('/addQuestionSet',questionSetController.addQuestionSet)

router.get('/questionSetAllQuestion/:id',questionSetController.getAllQuestionInThisQuestionSet)




router.get('/questionSet',questionSetController.getAllQuestionSet)
router.get('/questionSet/:id',questionSetController.getOneQuestionSet)
router.put('/updateQuestionSet/:id',questionSetController.updateOneQuestionSet)
router.delete('/deleteQuestionSet/:id',questionSetController.deleteQuestionSet)


module.exports = router;


