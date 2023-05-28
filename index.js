const express = require('express');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');
const {checkApiKey} =require('./middlewares/auth.handler');
const cors = require('cors');

const app = express();
const port = 3000;

//recibir json de respuesta
app.use(express.json());

const whitelist = ['http://localhost:8080','https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if( whitelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('No Permitido'));
    }
  }
}

app.use(cors(options));

//ejecutar la strategia
require('./utils/auth');

app.get('/midleware', checkApiKey, (request, response) => {
  response.send('api de productos');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
})
