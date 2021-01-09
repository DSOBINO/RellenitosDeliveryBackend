
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', require('./routes/utils'));
/*
app.get('/', function (req, res) {
    //res.send('Hola Mundo');
    res.json('Hola Mundo');

})
*/

app.get('/usuario', function (req, res) {
    //res.send('Hola Mundo');
    
    //res.send('Despliegue usuarios HTML');
    res.json('Despliegue Usuarios JSON');
})

app.post('/usuario', function(req, res) {
    //res.json('POST Usuario');

    let body = req.body;
    
    res.json({
                persona: body

    });

});


app.put('/usuario/:idEntrada', function(req, res) {

    let id = req.params.idEntrada;
   
    res.json({
                idSalida : id
    });
  

});



app.delete('/usuario',  function(req, res) {
    res.json('delete Usuario');
});

app.listen(port, () => { 
    console.log(`Escuchando puerto : ${ port}`);
});
