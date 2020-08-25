var Promedio = require('./api/routes/gonsaRouter');
var Disctuion = require('./api/routes/discutionRouter');
var One_query = require('./api/routes/one_route');
var NotasA = require('./api/routes/chesterRouter');
var Acciones = require('./api/routes/patoRouter');
var Juan = require('./api/routes/juanRouter');
var prediccion = require('./api/routes/prediccionRouter');

//predicción
var estres = require('./api/routes/estresRouter');

var predProm = require('./api/routes/promedioRouter');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;



//rutas, tanto de promedio como de post

app.use('/promedio', Promedio);

app.use('/post', Disctuion);

app.use('/one', One_query);

app.use('/notas', NotasA);

app.use('/cursos', Acciones);

app.use('/juan', Juan);

//ruta de predicción
app.use('/estres', estres);

app.use('/predProm', predProm);

app.use('/prediccion', prediccion);

app.listen(port);

console.log('gonsa RESTful API server started on: ' + port);