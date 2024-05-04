module.exports = (sequelize, DataTypes) => {

    const Sequelize=DataTypes;
    
        const Module = sequelize.define('Module', {
          moduleID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          module: {
            type: Sequelize.STRING,
          },
          // ... other fields (e.g., subject area)
        });
        
  return Module;
}