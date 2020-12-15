//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
//utilizar body do req
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
//rotas da aplicacao
.get('/', pages.index)
.get('/restaurant', pages.restaurant)
.get('/restaurants', pages.restaurants)
.get('/create-restaurant', pages.createRestaurant)
.post('/save-restaurant',pages.saveRestaurant);

//ligar o servidor
server.listen(5500);