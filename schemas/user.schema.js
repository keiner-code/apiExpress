const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const identificationCard = Joi.number();
const address = Joi.string();
const phone = Joi.number();
const email = Joi.string().email();
const password = Joi.string();
const state = Joi.boolean();
const rolId = Joi.number();

const createUserSchema = Joi.object({
  name: name.required(),
  identificationCard: identificationCard.required(),
  address: address.required(),
  phone: phone.required(),
  email: email.required(),
  password: password.required(),
  state: state.required(),
  rolId: rolId.required()
})

const updateUserSchema = Joi.object({
  name: name,
  identificationCard: identificationCard,
  address: address,
  phone: phone,
  email: email,
  password: password,
  state: state,
  rolId: rolId
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = {createUserSchema, updateUserSchema, getUserSchema}
