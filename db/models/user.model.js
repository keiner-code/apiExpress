const {Model, DataTypes, Sequelize} = require('sequelize');
const {ROL_TABLE} = require('./rol.model');

const USER_TABLE = 'users';

const UserSchema = {
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
  identificationCard: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'identification_card'
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
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
  rolId: {
    field: 'rol_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class User extends Model{
  static associate(models){
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'userId'
    });
    this.belongsTo(models.Rol,{as: 'rol'})
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User}
