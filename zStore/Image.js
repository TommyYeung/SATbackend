const School = require("./School");

module.exports = (sequelize, DataTypes) => {

    const Sequelize=DataTypes;
    
        const Image = sequelize.define('Image', {
          imageID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          imageURL: {
            type: Sequelize.STRING,
          },
        });

        // Image.belongsTo(School);
     
  return Image;
}