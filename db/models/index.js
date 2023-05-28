const {Product, ProductSchema} = require('./product.model');
const {Category, CategorySchema} = require('./category.model');
const {Rol, RolSchema} = require('./rol.model');
const {Order, OrderSchema} = require('./order.model');
const {User, UserSchema} = require('./user.model');
const {Image, ImagesSchema} = require('./images.model');
const {OrderProduct, OrderProductSchema} = require('./order-product.model');

function setupModels(sequelize){
  Image.init(ImagesSchema, Image.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  //Image.associate(sequelize.models);

  //una categoria tiene muchos productos
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);

  //un user tiene muchas ordenes
  Order.associate(sequelize.models);
  User.associate(sequelize.models);
}
module.exports = setupModels;
