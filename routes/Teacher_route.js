const teacherController = require('../controller/Teacher_controller')

const router = require('express').Router()

router.post('/addTeacher',teacherController.addTeacher)

router.get('/teacherAllQuestionSet/:id',teacherController.getAllQuestionSetInThisTeacherId)



router.get('/Teacher',teacherController.getAllTeacher)
router.get('/Teacher/:id',teacherController.getOneTeacher)
router.put('/updateTeacher/:id',teacherController.updateOneTeacher)
router.delete('/deleteTeacher/:id',teacherController.deleteTeacher)


module.exports = router;


