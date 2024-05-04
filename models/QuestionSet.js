module.exports = (sequelize, DataTypes) => {


    
  
  const QuestionSet = sequelize.define('QuestionSet', {
    // questionSetID: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    // qNo:{
    //     type: DataTypes.INTEGER,

    // },
    // teachID: {
    //   type: DataTypes.INTEGER,

    // },
    questionSetNo:{
      type: DataTypes.INTEGER,
    },
    title:{
      type: DataTypes.STRING,
    },
    description:{
      type: DataTypes.STRING,
    }
  });
  

  QuestionSet.associate = (model)=>{
    QuestionSet.hasMany(model.Question, {onDelete:"cascade"})
    QuestionSet.hasMany(model.Result)
    
  }




  return QuestionSet;
};