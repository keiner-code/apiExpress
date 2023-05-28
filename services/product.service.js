const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductServices {

  constructor(){}

  async create(data){
    const newUser = await models.Product.create(data);
    return newUser;
  }

  async find(query){
    const options = {include: ['category']}
    const {limit, offset} = query;

    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    const rta = await models.Product.findAll(options);
    return rta;
  }

  async findOne(id){
    const product = await models.Product.findByPk(id,{
      include: ['image','category']
    });
    if(!product){
      throw boom.notFound('Producto No Encontrado');
    }
    return product;
  }

  async update(id, changes){
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id){
    const product = await this.findOne(id);
    await product.destroy();
    return id;
  }
}

module.exports = ProductServices;
