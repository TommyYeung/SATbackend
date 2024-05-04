module.exports=(sequelize,DataTypes)=>{

    
    const Student = sequelize.define('Student', {
        // studentID: {
        //   type: DataTypes.INTEGER,
        //   primaryKey: true,
        //   autoIncrement: true,
        // },
        studentName: {
          type: DataTypes.STRING,
        },
        // schoolID: {
        //   type: DataTypes.INTEGER,

        // },
        // resultID: {
        //   type: DataTypes.INTEGER,
        //   allowNull: true,  // Student might not have a result yet

        // },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        userType: {
          type: DataTypes.STRING,

        },
        password: { // Remember to implement secure password hashing
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
      });


      Student.associate = (model)=>{

        Student.hasMany(model.Result, {onDelete:"cascade"})
  
      }

      
return Student
}