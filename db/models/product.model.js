const {Model, DataTypes, Sequelize} = require('sequelize');
const {CATEGORY_TABLE} = require('../models/category.model');
const {IMAGES_TABLE} = require('./images.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  code: {
    allowNull: false,
    type: DataTypes.STRING
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  salePrice: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'sale_price'
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'sale_price'
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  state: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  imageId: {
    field: 'image_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: IMAGES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Product extends Model{

  static associate(models){
    this.belongsTo(models.Image,{as: 'image'});
    this.belongsTo(models.Category,{as: 'category'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = {PRODUCT_TABLE, ProductSchema, Product}
