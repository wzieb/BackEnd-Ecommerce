// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
Category.hasOne(Product, {
  foreignKey: 'category_id',
});

Product.belongsTo(Category,{
  foreignKey: 'category_id'
});
// Categories have many Products (one to many relationship)
//-->i.e."one category can have many products"
Category.hasMany(Product, {
  foreignKey:'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
