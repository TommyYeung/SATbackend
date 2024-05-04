
module.exports = (sequelize, DataTypes) => {

    const Sequelize=DataTypes;

const Choice = sequelize.define('Choice', {
    // choiceID: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    // QuesitonQNo: {
    //   type: Sequelize.INTEGER,
      
    // },
    choice: {
      type: Sequelize.STRING,
    },
    
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    //   references: {
    //     model: 'Image',
    //     key: 'imageID',
    //   },
    },
  });

  // Choice.associate = (model)=>{
            
  //   Choice.hasOne(sequelize.define('Question'))
    
  // }

  return Choice;
}