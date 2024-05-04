// const { DataTypes,sequelize } = require("sequelize");


module.exports=(sequelize,DataTypes)=>{

    const QuestionsA = sequelize.define("QuestionsA",{
        questionNumber:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        question:{
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        // choices:{
        //     type: DataTypes.STRING,
        //     get() {
        //         const value = this.getDataValue('choices');
        //         return value ? value.split(',') : [];
        //     },
        //     set(value) {
        //         this.setDataValue('choices', value.join(',')); // as Sequelize do not have ArrayDatatype for mysql
        //     }
        // },
        choices: {
            type: DataTypes.STRING,
            allowNull: true,
            get() {
                const value = this.getDataValue('choices');
                return value ? value.split(',') : [];
            },
            set: function(value) {
                if (Array.isArray(value)) {
                    this.setDataValue('choices', value.join(','));
                } else if (typeof value === 'string') {
                    this.setDataValue('choices', value); // Use the string directly
                } else {
                    this.setDataValue('choices', null); // Reset choices if value is neither array nor string
                }
            }
        }
        ,
        correctAnswer: {
            type: DataTypes.STRING, // Change data type to STRING
            allowNull: false,
            
        },
        questionType:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        module:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return QuestionsA
}