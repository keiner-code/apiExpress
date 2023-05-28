const Joi = require('joi');

const id = Joi.string();
const userId = Joi.number();
const orderId = Joi.number();
const productId = Joi.number();
const amount = Joi.number();

const createOrderSchema = Joi.object({
  userId: userId.required()
});
const AddItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});
const updateOrderSchema = Joi.object({
  productId: productId,
  orderId: orderId,
  userId: userId,
  amount: amount
});

const getOrderSchema = Joi.object({
  id: id.required()
});

module.exports = {createOrderSchema, updateOrderSchema, getOrderSchema,AddItemSchema}
