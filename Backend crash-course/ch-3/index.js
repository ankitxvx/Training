
const morgan = require('morgan');
const express = require('express');
const server = express();
const productController = require('./controller/product')
const router = express.Router()
const productRouter = require('./router/product')
const UserRouter = require('./router/user')
server.use('/products',productRouter)
server.use('/users',UserRouter)
//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
//MVC model-view-controller

server.listen(8080, () => {
    console.log('Server started on port 8080');
});
