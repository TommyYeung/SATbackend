const express = require('express');
const cors = require('cors')
const app = express();



// var corOptions={
//     origin:"https://localhost:3001"
// }
//Middleware

app.use(express.json());
app.use(cors())
// app.use(cors(corOptions));

// app.use(express.urlencoded({extended:true}))

const db = require('./models');


//Routers


// const router = require('./routes/Questions_route.js')
// app.use('/questions',router)


const routerQuestionSet = require('./routes/QuestionSet_router.js')
app.use('/questionSet',routerQuestionSet)
const routerTeacher = require('./routes/Teacher_route.js')
app.use('/teacher',routerTeacher)
const routerQuestion = require('./routes/Question_route.js')
app.use('/question',routerQuestion)
const routerChoice = require('./routes/Choice_route.js')
app.use('/choice',routerChoice)


const PORT = process.env.PORT || 3001


// check/create table in mysql (sequlize orm)
db.sequelize.sync().then(() => {

    // set port for the app, the function in there will be triggered whenever the server start

        app.listen(PORT, () => {
        console.log("Backend server running on port 3001");
    });

    

})
