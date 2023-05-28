const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const description = Joi.string();
const state = Joi.boolean();

const createRolSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  state: state.required(),
});
const updateRolSchema = Joi.object({
  name: name,
  description: description,
  state: state
});

const getRolSchema = Joi.object({
  id: id.required()
});

module.exports = {createRolSchema, updateRolSchema, getRolSchema}
