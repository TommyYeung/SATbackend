// module.exports = (sequelize, DataTypes) => {
//     const UserType = sequelize.define('UserType', {
//       userTypeID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       userType: {
//         type: DataTypes.STRING,
//       },
//     });
  
//     const School = sequelize.define('School', {
//       schoolID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       school: {
//         type: DataTypes.STRING,
//       },
//       imageID: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//     });
  
//     const Teacher = sequelize.define('Teacher', {
//       teacherID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       teacherName: {
//         type: DataTypes.STRING,
//       },
//       schoolID: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'School',
//           key: 'schoolID',
//         },
        
//       },
//       imageID: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       userTypeID: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'UserTypes',
//           key: 'userTypeID',
//         },
//       },
//       password: { // Remember to implement secure password hashing
//         type: DataTypes.STRING,
//       },
//       email: {
//         type: DataTypes.STRING,
//       },
//     });
  
//     const Student = sequelize.define('Student', {
//       studentID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       studentName: {
//         type: DataTypes.STRING,
//       },
//       schoolID: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Schools',
//           key: 'schoolID',
//         },
//       },
//       resultID: {
//         type: DataTypes.INTEGER,
//         allowNull: true,  // Student might not have a result yet
//         references: {
//           model: 'Results',
//           key: 'resultID',
//         },
//       },
//       imageID: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       userTypeID: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'UserTypes',
//           key: 'userTypeID',
//         },
//       },
//       password: { // Remember to implement secure password hashing
//         type: DataTypes.STRING,
//       },
//       email: {
//         type: DataTypes.STRING,
//       },
//     });
  
//     // Relationships (Foreign Keys already defined in model definitions)
  
//     return {
//       UserType,
//       School,
//       Teacher,
//       Student,
//     };
//   };