// const { DataTypes } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {

//     const Sequelize=DataTypes;

//     const UserType = sequelize.define('UserType', {
//         userTypeID: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         userType: {
//           type: Sequelize.STRING,
//         },
//       });

//       return UserType;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;

//       const School = sequelize.define('School', {
//         schoolID: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         school: {
//           type: Sequelize.STRING,
//         },
//         imageID: {
//           type: Sequelize.INTEGER,
//           allowNull: true,
//           references: {
//             model: 'Image',
//             key: 'imageID',
//           },
//         },
//       });
      
//       return School;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//       const Teacher = sequelize.define('Teacher', {
//         teacherID: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         teacherName: {
//           type: Sequelize.STRING,
//         },
//         schoolID: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'School',
//             key: 'schoolID',
//           },
//         },
//         imageID: {
//           type: Sequelize.INTEGER,
//           allowNull: true,
//           references: {
//             model: 'Image',
//             key: 'imageID',
//           },
//         },
//         userTypeID: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'UserType',
//             key: 'userTypeID',
//           },
//         },
//         // **Password Hashing (Security):**
//         password: {
//           type: Sequelize.STRING,
//           set(value) {
//             const hashedPassword = hashPassword(value); // Replace with your hashing function
//             this.setDataValue('password', hashedPassword);
//           },
//         },
//         email: {
//           type: Sequelize.STRING,
//         },
//       });
      
//       return Teacher;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//       const Student = sequelize.define('Student', {
//         studentID: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         studentName: {
//           type: Sequelize.STRING,
//         },
//         schoolID: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'School',
//             key: 'schoolID',
//           },
//         },
//         resultID: {
//           type: Sequelize.INTEGER,
//           allowNull: true,
//           references: {
//             model: 'Result',
//             key: 'resultID',
//           },
//         },
//         imageID: {
//           type: Sequelize.INTEGER,
//           allowNull: true,
//           references: {
//             model: 'Image',
//             key: 'imageID',
//           },
//         },
//         userTypeID: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'UserType',
//             key: 'userTypeID',
//           },
//         },
//         // **Password Hashing (Security):**
//         password: {
//           type: Sequelize.STRING,
//           set(value) {
//             const hashedPassword = hashPassword(value); // Replace with your hashing function
//             this.setDataValue('password', hashedPassword);
//           },
//         },
//         email: {
//           type: Sequelize.STRING,
//         },
//       });

      
//       return Student;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
      
//       const QuestionSet = sequelize.define('QuestionSet', {
//         questionSetID: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         qNo:{
//             type: DataTypes.INTEGER,
//             references:{
//                 model:'Question',
//                 key:'qNo',
//             }
//         },
//         teachID: {
//           type: Sequelize.INTEGER,
//           references: {
//             model: 'Teacher',
//             key: 'teacherID',
//           },
//         },
//       });
      
//       return QuestionSet;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//       const Question = sequelize.define('Question', {
//         qNo: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         question: {
//           type: Sequelize.STRING,
//         },
//         qTypeID:{
//             type: Sequelize.INTEGER,
//             allowNull: true,
//             references: {
//               model: 'QType',
//               key: 'qTypeID',
//             },
//         },
//         choiceID:{
//             type: Sequelize.INTEGER,
//             allowNull: true,
//             references: {
//               model: 'Choice',
//               key: 'choiceID',
//             },
//         },
//         correctAnswerID:{
//             type: Sequelize.INTEGER,
//             allowNull: true,
//             references: {
//               model: 'CorrectAnswer',
//               key: 'correctAnswerID',
//             },
//         },
//         moduleID:{
//             type: Sequelize.INTEGER,
//             allowNull: true,
//             references: {
//               model: 'Module',
//               key: 'moduleID',
//             },
//         },

//         imageID: {
//             type: Sequelize.INTEGER,
//             allowNull: true,
//             references: {
//               model: 'Image',
//               key: 'imageID',
//             },
//           },
              
//             },
        
//         );
            
//       return Question;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//             const QuestionType = sequelize.define('QuestionType', {
//               qTypeID: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//               },
//               qType: {
//                 type: Sequelize.STRING,
//               },
//             });
            
//             const Choice = sequelize.define('Choice', {
//               choiceID: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//               },
//               choice: {
//                 type: Sequelize.STRING,
//               },
//               qNo: {
//                 type: Sequelize.INTEGER,
//                 references: {
//                   model: 'Question',
//                   key: 'qNo',
//                 },
//               },
//               imageID: {
//                 type: Sequelize.INTEGER,
//                 allowNull: true,
//                 references: {
//                   model: 'Image',
//                   key: 'imageID',
//                 },
//               },
//             });
            
//       return QuestionType;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//             const CorrectAnswer = sequelize.define('CorrectAnswer', {
//               correctAnswerID: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//               },
//               correctAnswer: {
//                 type: Sequelize.STRING,
//               },
//               qNo: {
//                 type: Sequelize.INTEGER,
//                 references: {
//                   model: 'Question',
//                   key: 'qNo',
//                 },
//               },
//             });
            
//       return CorrectAnswer;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//             const Module = sequelize.define('Module', {
//               moduleID: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//               },
//               module: {
//                 type: Sequelize.STRING,
//               },
//               // ... other fields (e.g., subject area)
//             });
            
//       return Module;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
        
//             const Image = sequelize.define('Image', {
//               imageID: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//               },
//               imageURL: {
//                 type: Sequelize.STRING,
//               },
//             });
         
//       return Image;
//     }
//     module.exports = (sequelize, DataTypes) => {

//         const Sequelize=DataTypes;
           
//             const Result = sequelize.define('Result', {
//               resultID: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//               },
//               corrM1: {
//                 type: Sequelize.INTEGER,
//               },
//               corrM2: {
//                 type: Sequelize.INTEGER,
//               },
//               wrongM1: {
//                 type: Sequelize.INTEGER,
//               },
//               wrongM2: {
//                 type: Sequelize.INTEGER,
//               },
//               percentM1: {
//                 type: Sequelize.FLOAT,
//               },
//               percentM2: {
//                 type: Sequelize.FLOAT,
//               },
//               questionSetID: {
//                 type: Sequelize.INTEGER,
//                 references: {
//                   model: 'QuestionSet',
//                   key: 'questionSetID',
//                 },
//               },
//               studentID: {
//                 type: Sequelize.INTEGER,
//                 references: {
//                   model: 'Student',
//                   key: 'studentID',
//                 },
//               },
//             });
            
//       return Result;
//     }

        
//             // // Define relationships (associations) between models (optional, but recommended)
            
//             // QuestionSet.belongsTo(Teacher, { foreignKey: 'teachID' }); // Teacher creates Question Sets
//             // Question.belongsTo(QuestionType, { foreignKey: 'qTypeID' }); // Question has a type
//             // Question.hasMany(Choice, { foreignKey: 'qNo' }); // Question has many Choices
//             // Question.hasOne(CorrectAnswer, { foreignKey: 'qNo' }); // Question has one Correct Answer
//             // Question.belongsTo(Module, { foreignKey: 'moduleID' }); // Question belongs to a Module
//             // Choice.belongsTo(Question, { foreignKey: 'qNo' }); // Choice belongs to a Question
//             // CorrectAnswer.belongsTo(Question, { foreignKey: 'qNo' }); // Correct Answer belongs to a Question
//             // Result.belongsTo(QuestionSet, { foreignKey: 'questionSetID' }); // Result belongs to a Question Set
//             // Result.belongsTo(Student, { foreignKey: 'studentID' }); // Result belongs to a Student
            
//             // // Synchronize models with the database (create tables)














//     // // ... definitions for QuestionType, Choice, CorrectAnswer, Module, Image, Result
  
//     // // Relationships
//     // QuestionSet.hasMany(Question, { foreignKey: 'questionSetID' });
//     // Question.belongsTo(QuestionSet, { foreignKey: 'questionSetID' });
  
//     // // ... other relationships

//     // (async () => {
//     //     try {
//     //       await sequelize.sync({ force: true }); // Creates tables if they don't exist (force: true drops existing tables)
//     //       console.log("All models synced successfully.");
//     //     } catch (error) {
//     //       console.error("Error syncing models:", error);
//     //     }
//     //   })();
      
//     //   // Remember to replace placeholders with your actual hashing function
//     //   function hashPassword(password) {
//     //     // Implement a strong password hashing algorithm here (e.g., bcrypt)
//     //     // You can find libraries like bcryptjs for Node.js
//     //     throw new Error("Please implement a secure password hashing function!");
//     //   }
      
//     //   module.exports = {
//     //     UserType,
//     //     School,
//     //     Teacher,
//     //     Student,
//     //     QuestionSet,
//     //     Question,
//     //     QuestionType,
//     //     Choice,
//     //     CorrectAnswer,
//     //     Module,
//     //     Image,
//     //     Result,
//     //     sequelize, // Optional: Include sequelize instance for advanced usage
//     //   };





  
// //     return {
// //         UserType,
// //         School,
// //         Teacher,
// //         Student,
// //         QuestionSet,
// //         Question,
// //         QuestionType,
// //         Choice,
// //         CorrectAnswer,
// //         Module,
// //         Image,
// //         Result,

      
// //     };
// //   };

  