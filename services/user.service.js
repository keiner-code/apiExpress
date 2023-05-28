const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const {models} = require('../libs/sequelize');

class UserService {
  constructor(){}
  async find(){
    const rta = await models.User.findAll({include: ['rol']});
    return rta;
  }
  async findOne(id){
    const user = await models.User.findByPk(id,{
      include: ['rol']
    });
    if(!user){
      throw boom.notFound('Usuario No Encontrada');
    }
    return user;
  }
  async findEmail(email){
    const user = await models.User.findOne({
      where: {email},
      include: ['rol']
    });
    return user;
  }
  async create(data){
    const hash = await bcrypt.hash(data.password,10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }
  async update(id,changes){
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }
  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return id;
  }
}
module.exports = UserService;
