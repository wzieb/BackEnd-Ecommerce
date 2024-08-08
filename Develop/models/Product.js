// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type:DataTypes.INTEGER, //integer
      allowNull: false, //doesn't allow null values
      primaryKey:true, //set as primary key
      autoIncrement:true //uses auto increment

    },
    product_name: {
      type:DataTypes.STRING,
      allowNull: false,
    }, 
    price:{
      type:DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal:true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:10, //set a default value of 10? 
      validate:{
      isNumeric: true
    },
  },
    category_id: {// this is the foreign key. 
      type:DataTypes.INTEGER,
      references: {
        model: 'category', //this references the 'category' model
        key: 'id',// this references id within the category model
      },
  },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  });

module.exports = Product;
