const { Router } = require('express');
const productController = require('./src/controller/product');

const routes = Router();

routes.get('/produtos', productController.get);
routes.post('/produtos', productController.post);
routes.delete('/produtos/:id', productController.del);
routes.put('/produtos/:id', productController.put);

module.exports = routes;