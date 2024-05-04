module.exports=(sequelize,DataTypes)=>{

    
    const School = sequelize.define('School', {
        // schoolID: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //   },
          school: {
            type: DataTypes.STRING,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: true,

          },
        });

        School.associate = (model)=>{
          School.hasMany(model.Teacher, {onDelete:"cascade"})
          School.hasMany(model.Student, {onDelete:"cascade"})
          
        }




return School
}