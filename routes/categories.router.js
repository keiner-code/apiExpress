const express = require('express');
const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createCategorySchema, updateCategorySchema, getCategorySchema} = require('../schemas/category.schema');
const passport = require('passport');
const {checkRoles} = require('../middlewares/auth.handler')

const router = express.Router();
const service = new CategoryService();

router.get('/', async(req,res) => {
    const category = await service.find();
    res.json(category);
});
router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  passport.authenticate('jwt',{session: false}), //valida si el usuario tiene un token
  checkRoles('administrador'), //valida si el token del usuario es administrador
  async(req,res, next) => {
    try {
      const {id} = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error)
    }
  }
);

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  passport.authenticate('jwt',{session: false}),
  checkRoles('administrador'),
  async(req,res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
  }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  passport.authenticate('jwt',{session: false}),
  checkRoles('administrador'),
  async (req,res) => {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  }
);

router.delete('/:id',
  passport.authenticate('jwt',{session: false}),
  checkRoles('administrador'),
  async(req,res) => {
    const {id} = req.params;
    const message = await service.delete(id);
    res.json(message)
})

module.exports = router;
