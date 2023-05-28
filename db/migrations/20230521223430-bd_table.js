'use strict';
const {CategorySchema, CATEGORY_TABLE} = require('../models/category.model');
const {RolSchema, ROL_TABLE} = require('../models/rol.model');
const {OrderSchema, ORDER_TABLE} = require('../models/order.model');
const {UserSchema, USER_TABLE} = require('../models/user.model');
const {ProductSchema, PRODUCT_TABLE} = require('../models/product.model');
const {OrderProductSchema, ORDER_PRODUCT_TABLE} = require('../models/order-product.model');
const {ImagesSchema, IMAGES_TABLE} = require('../models/images.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(ROL_TABLE, RolSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(IMAGES_TABLE, ImagesSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ROL_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(IMAGES_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
