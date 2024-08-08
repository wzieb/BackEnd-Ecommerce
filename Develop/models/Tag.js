const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id:{
      type:DataTypes.INTEGER, //integer
      allowNull: false, //doesn't allow null values
      primaryKey:true, //set as primary key
      autoIncrement:true //uses auto increment
  },
    tag_name: {
      type:DataTypes.STRING
    },
  },{
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
