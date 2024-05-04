const questionController = require('../controller/Question_controller')

const router = require('express').Router()

router.post('/addQuestion',questionController.addQuestion)




router.get('/question',questionController.getAllQuestion)
router.get('/question/:id',questionController.getOneQuestion)
router.put('/updateQuestion/:id',questionController.updateOneQuestion)
router.delete('/deleteQuestion/:id',questionController.deleteQuestion)


module.exports = router;

