const express = require('express');
const ImagesService = require('../services/images.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createImagesSchema, updateImagesSchema, getImagesSchema} = require('../schemas/images.schema');


const router = express.Router();
const service = new ImagesService();

router.get('/', async(req,res) => {
  const image = await service.find();
  res.json(image);
})
router.get('/:id',
  validatorHandler(getImagesSchema, 'params'),
  async(req,res, next) => {
    try {
      const {id} = req.params;
      const image = await service.findOne(id);
      res.json(image);
    } catch (error) {
      next(error)
    }
  }
);

router.post('/',
  validatorHandler(createImagesSchema, 'body'),
  async(req,res) => {
    const body = req.body;
    const newImage = await service.create(body);
    res.status(201).json(newImage)
  }
);

router.patch('/:id',
  validatorHandler(getImagesSchema, 'params'),
  validatorHandler(updateImagesSchema, 'body'),
  async (req,res) => {
    const {id} = req.params;
    const body = req.body;
    const image = await service.update(id, body);
    res.json(image)
  }
);

router.delete('/:id', async(req,res) => {
  const {id} = req.params;
  const message = await service.delete(id);
  res.json(message)
})

module.exports = router;
