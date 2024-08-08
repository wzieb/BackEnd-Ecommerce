const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
      type:DataTypes.INTEGER, //integer
      allowNull: false, //doesn't allow null values
      primaryKey:true, //set as primary key
      autoIncrement:true //uses auto increment

    },
    category_name: {
      type:DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
