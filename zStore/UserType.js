
module.exports=(sequelize,DataTypes)=>{

    
        const UserType = sequelize.define('UserType', {
            userTypeID: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            userType: {
              type: DataTypes.STRING,
            },
          });
    
    return UserType
}