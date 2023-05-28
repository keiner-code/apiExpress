const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class CategoryService {
  constructor(){}
  async find(){
    const rta = await models.Category.findAll();
    return rta;
  }
  async findOne(id){
    const category = await models.Category.findByPk(id,{
      include: ['products']
    });
    if(!category){
      throw boom.notFound('Categoria No Encontrada');
    }
    return category;
  }
  async create(data){
    const newCate = await models.Category.create(data);
    return newCate;
  }
  async update(id,changes){
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }
  async delete(id){
    const category = await this.findOne(id);
    await category.destroy();
    return id;
  }
}
module.exports = CategoryService;
