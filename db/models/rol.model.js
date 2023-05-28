const {Model, DataTypes, Sequelize} = require('sequelize');

const ROL_TABLE = 'roles';

const RolSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
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
  }
}

class Rol extends Model{
  static associate(models){
    this.hasMany(models.User,{
      as: 'users',
      foreignKey: 'rolId'
    });

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: 'Rol',
      timestamps: false
    }
  }
}

module.exports = {ROL_TABLE, RolSchema, Rol}
