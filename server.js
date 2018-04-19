const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers/helpers');

//obtener el puerto que otorga heroku, el cual se desconoce pero se puede leer
const port = process.env.PORT || 3000; //el objeto process.env.PORT no existe cuando se corre localmente, por esto se coloca el 3000

//middleware: Se ejecuta siempre, sin importar cuál sea el URL que la persona pide
app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales'); //directorio para los parciales
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    //res.send('Hello World')
    // let salida = {
    //     nombre: 'Miguel',
    //     edad: 27,
    //     url: req.url
    // };

    res.render('home', {
        nombre: 'miguel rendón',
        //anio: new Date().getFullYear()
    });
    //res.send(salida);
})

app.get('/about', function(req, res) {
    res.render('about', {
        //anio: new Date().getFullYear()
    });
    //res.send(salida);
})

app.get('/data', function(req, res) {
    res.send('Hello World')
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`));

//app.listen(3000, () => console.log("Escuchando peticiones en el puerto 3000"));