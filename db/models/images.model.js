const {Model, DataTypes, Sequelize} = require('sequelize');

const IMAGES_TABLE = 'images';

const ImagesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  imagen1: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'image_1'
  },

  imagen2: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'image_2'
  },

  imagen3: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'image_3'
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Image extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: IMAGES_TABLE,
      modelName: 'Image',
      timestamps: false
    }
  }
}

module.exports = {IMAGES_TABLE, ImagesSchema, Image}
