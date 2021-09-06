const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost:27017/dbserver')
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error('ERROR AL CONECTAR DB: ', err));