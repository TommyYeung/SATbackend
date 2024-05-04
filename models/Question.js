

module.exports = (sequelize, DataTypes) => {

  const Sequelize = DataTypes;

  const Question = sequelize.define('Question', {
    // qNo: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    question: {
      type: Sequelize.TEXT('long'),
    },
    qType: {
      type: Sequelize.STRING,

  
    },
    // choiceID: {
    //   type: Sequelize.INTEGER,


    // },
    correctAnswer: {
      type: Sequelize.STRING,

      


    },
    module: {
      type: Sequelize.INTEGER,

   


    },

    image: {
      type: Sequelize.STRING,

      allowNull: true,

    },


  });
  // QuestionType.belongsTo(Question, { foreignKey: 'qTypeID' });
  // Question.hasOne(QuestionType, { foreignKey: 'qTypeID' });


  // Question.associate = (model)=>{

  //   Question.hasMany(sequelize.define('Choice', {
  //     // choiceID: {
  //     //   type: Sequelize.INTEGER,
  //     //   primaryKey: true,
  //     //   autoIncrement: true,
  //     // },
  //     // QuesitonQNo: {
  //     //   type: Sequelize.INTEGER,
        
  //     // },
  //     choice: {
  //       type: Sequelize.STRING,
  //     },
      
  //     imageID: {
  //       type: Sequelize.INTEGER,
  //       allowNull: true,
  //     //   references: {
  //     //     model: 'Image',
  //     //     key: 'imageID',
  //     //   },
  //     },
  //   }
  //   ))

  // }

  Question.associate = (models)=>{
  console.log(models)
    Question.hasMany(models.Choice)
    

  }




  return Question;
}


// module.exports = (sequelize, DataTypes) => {

//   const Sequelize = DataTypes;

//   const Question = sequelize.define('Question', {
//     qNo: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     question: {
//       type: Sequelize.TEXT('long'),
//     },
//     qTypeID: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'QType',
//         key: 'qTypeID',
//       },
//     },
//     choiceID: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'Choice',
//         key: 'choiceID',
//       },
//     },
//     correctAnswerID: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'CorrectAnswer',
//         key: 'correctAnswerID',
//       },
//     },
//     moduleID: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'Module',
//         key: 'moduleID',
//       },
//     },
//     imageID: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'Image',
//         key: 'imageID',
//       },
//     },
//   });

//   return Question;
// }
