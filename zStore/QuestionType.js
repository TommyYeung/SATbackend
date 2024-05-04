


module.exports = (sequelize, DataTypes) => {

    const Sequelize=DataTypes;
    
        const QuestionType = sequelize.define('QuestionType', {
          qTypeID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          qType: {
            type: Sequelize.STRING,
          },
        });
        
        QuestionType.associate = (model)=>{
            
            QuestionType.hasMany(sequelize.define('Question'))
            
          }
        
  return QuestionType;
}