const productsRouter = require('./products.router');
const categoryRouter = require('./categories.router');
const RolRouter = require('./rol.router');
const OrderRouter = require('./order.router');
const UserRouter = require('./user.router');
const ImageRouter = require('./images.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');
const express = require('express');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter);
  router.use('/category',categoryRouter);
  router.use('/rol',RolRouter);
  router.use('/orders',OrderRouter);
  router.use('/users',UserRouter);
  router.use('/images',ImageRouter);
  router.use('/auth',authRouter);
  router.use('/profile',profileRouter);
}

module.exports = routerApi;
