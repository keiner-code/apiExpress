const Joi = require('joi');

const id = Joi.string();
const code = Joi.string();
const name = Joi.string();
const price = Joi.number();
const salePrice = Joi.number();
const stock = Joi.number();
const description = Joi.string();
const state = Joi.boolean();
const categoryId = Joi.number();
const imageId = Joi.number();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
  code: code.required(),
  name: name.required(),
  price: price.required(),
  salePrice: salePrice.required(),
  stock: stock.required(),
  description: description.required(),
  state: state.required(),
  categoryId: categoryId.required(),
  imageId: imageId.required()
})

const updateProductSchema = Joi.object({
  code: code,
  name: name,
  price: price,
  salePrice: salePrice,
  stock: stock,
  description: description,
  state: state,
  categoryId: categoryId,
  imageId: imageId
})

const queryProductSchema = Joi.object({
  limit,
  offset
})

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {createProductSchema,updateProductSchema,getProductSchema,queryProductSchema}
