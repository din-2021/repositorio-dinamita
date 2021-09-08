const router = require('express').Router();

const { 
    rutaGet
 } = require('../controllers/user.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/home', rutaGet)

module.exports = router;