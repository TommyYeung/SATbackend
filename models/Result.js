module.exports = (sequelize, DataTypes) => {

    const Sequelize=DataTypes;
       
        const Result = sequelize.define('Result', {
          // resultID: {
          //   type: Sequelize.INTEGER,
          //   primaryKey: true,
          //   autoIncrement: true,
          // },
          corrM1: {
            type: Sequelize.INTEGER,
          },
          corrM2: {
            type: Sequelize.INTEGER,
          },
          wrongM1: {
            type: Sequelize.INTEGER,
          },
          wrongM2: {
            type: Sequelize.INTEGER,
          },
          percentM1: {
            type: Sequelize.FLOAT,
          },
          percentM2: {
            type: Sequelize.FLOAT,
          },
          // questionSetID: {
          //   type: Sequelize.INTEGER,
          //   // references: {
          //   //   model: 'QuestionSet',
          //   //   key: 'questionSetID',
          //   // },
          // },
          // studentID: {
          //   type: Sequelize.INTEGER,
          //   // references: {
          //   //   model: 'Student',
          //   //   key: 'studentID',
          //   // },
          // },
        });

        


        
  return Result;
}