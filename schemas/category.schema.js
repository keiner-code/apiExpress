const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const description = Joi.string();
const state = Joi.boolean();

const createCategorySchema = Joi.object({
  name: name.required(),
  description: description.required(),
  state: state.required()
});

const updateCategorySchema = Joi.object({
  name: name,
  description: description,
  state: state
});

const getCategorySchema = Joi.object({
  id: id.required()
});

module.exports = {createCategorySchema, updateCategorySchema, getCategorySchema}
