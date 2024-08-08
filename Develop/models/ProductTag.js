const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init({
  id: {
    type: DataTypes.INTEGER, //integer
    allowNull: false, //doesn't allow null values
    primaryKey: true, //set as primary key
    autoIncrement: true, //uses auto increment
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id",
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tag",
      key: "id",
    },
  },
},{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product_tag",
});

module.exports = ProductTag;
