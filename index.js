
const express = require('express')

const app = express()


// Setttings
app.set('port', process.env.PORT || 5000);

// Routes
app.use(require('./routes/user.routes'));

 

app.listen(app.get('port'), ()=> console.log(`Server en linea en el puerto: ${app.get('port')}`))
