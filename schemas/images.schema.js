const Joi = require('joi');

const id = Joi.string();
const imagen1 = Joi.string();
const imagen2 = Joi.string();
const imagen3 = Joi.string();

const createImagesSchema = Joi.object({
  imagen1: imagen1.required(),
  imagen2: imagen2.required(),
  imagen3: imagen3.required()
});

const updateImagesSchema = Joi.object({
  imagen1: imagen1,
  imagen2: imagen2,
  imagen3: imagen3
});

const getImagesSchema = Joi.object({
  id: id.required()
});

module.exports = {createImagesSchema, updateImagesSchema, getImagesSchema}
