/* const express = require('express')
require('dotenv').config();

require('./connection');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setttings
app.set('port', process.env.PORT || 3000);

// Routes
//app.use(require('./routes/user.routes'));
 
app.listen(app.get('port'), ()=> console.log(`Server en linea en el puerto: ${app.get('port')}`)) */


const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(console.log("Servidor en linea:3000"))
