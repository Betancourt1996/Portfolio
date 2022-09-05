var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Usuarios = require('../models').usuarios;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("apiver",{ title: 'API' })
});

router.get('/usuarios', function(req, res, next) {
    
    Usuarios.findAll({
      
    }).
    then(resultado=>{
        res.json(resultado)
    })    
    .catch(error => res.status(400).send(error)) 
  });
module.exports = router;
