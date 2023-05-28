const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class ImagesService {
  constructor(){}
  async find(){
    const rta = await models.Image.findAll();
    return rta;
  }
  async findOne(id){
    const image = await models.Image.findByPk(id);
    if(!image){
      throw boom.notFound('Imagen No Encontrada');
    }
    return image;
  }
  async create(data){
    const newImage = await models.Image.create(data);
    return newImage;
  }
  async update(id,changes){
    const image = await this.findOne(id);
    const rta = await image.update(changes);
    return rta;
  }
  async delete(id){
    const image = await this.findOne(id);
    await image.destroy();
    return id;
  }
}
module.exports = ImagesService;
