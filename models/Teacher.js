module.exports=(sequelize,DataTypes)=>{

    
    const Teacher = sequelize.define('Teacher', {
        // teacherID: {
        //   type: DataTypes.INTEGER,
        //   primaryKey: true,
        //   autoIncrement: true,
        // },
        teacherName: {
          type: DataTypes.STRING,
        },
        // schoolID: {
        //   type: DataTypes.INTEGER,

          
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


      Teacher.associate = (model)=>{

        Teacher.hasMany(model.QuestionSet, {onDelete:"cascade"})
  
      }



return Teacher
}