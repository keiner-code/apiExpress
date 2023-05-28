const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class OrderService {
  constructor(){}

  async find(){
    const rta = await models.Order.findAll();
    return rta;
  }
  async findOne(id){
    const order = await models.Order.findByPk(id,{
      include: ['user','items']
    });
    if(!order){
      throw boom.notFound('Detalle De La Venta No Encontrada');
    }
    return order;
  }
  async findByUser(userId){
    const order = await models.Order.findAll({
      where: {
        id: userId
      },
      include: ['user']
    });
    if(!order){
      throw boom.notFound('Detalle De La Venta No Encontrada');
    }
    return order;
  }
  async addItem(data){
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }
  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }
  async update(id,changes){
    const order = await this.findOne(id);
    const rta = await order.update(changes);
    return rta;
  }
  async delete(id){
    const order = await this.findOne(id);
    await order.destroy();
    return id;
  }
}
module.exports = OrderService;
