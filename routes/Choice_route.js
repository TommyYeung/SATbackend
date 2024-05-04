const choiceController = require('../controller/Choice_controller')

const router = require('express').Router()

router.post('/addChoice',choiceController.addChoice)




router.get('/thisQuestionChoice/:id',choiceController.thisQuestionChoice)



router.get('/choice',choiceController.getAllChoice)
router.get('/choice/:id',choiceController.getOneChoice)
router.put('/updateChoice/:id',choiceController.updateOneChoice)
router.delete('/deleteChoice/:id',choiceController.deleteChoice)


module.exports = router;
