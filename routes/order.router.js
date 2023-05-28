const express = require('express');
const Order = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createOrderSchema, updateOrderSchema, getOrderSchema, AddItemSchema} = require('../schemas/order.schema');


const router = express.Router();
const service = new Order();

router.get('/', async(req,res) => {
  const order = await service.find();
  res.json(order);
})

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async(req,res, next) => {
    try {
      const {id} = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error)
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async(req,res) => {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder)
  }
);

router.post('/add-item',
  validatorHandler(AddItemSchema,'body'),
  async (req, res, next) => {
      try {
        const body = req.body;
        const newItem = await service.addItem(body);
        res.status(201).json(newItem);
      } catch (error) {
        next(error);
      }
  }
)

router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req,res) => {
    const {id} = req.params;
    const body = req.body;
    const order = await service.update(id, body);
    res.json(order)
  }
);

router.delete('/:id', async(req,res) => {
  const {id} = req.params;
  const message = await service.delete(id);
  res.json(message)
})

module.exports = router;
