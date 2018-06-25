const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/Carottes", function (req, res) {
    res.render('Carottes', {});
} );

app.get("/contact", function (req, res) {
    res.render('contact', {});
} );

app.get("/Courgette", function (req, res) {
    res.render('Courgette', {});
} );

app.get("/oeuf", function (req, res) {
    res.render('oeuf', {});
} );

app.get("/pageaccueil", function (req, res) {
    res.render('pageaccueil',{});
} );

app.get("/yaourt", function (req, res) {
    res.render('yaourt',{});
} );

app.get("/Sommaire", function (req, res) {
    res.render('Sommaire',{});
} );

app.get("/Recommandation", function (req, res) {
    res.render('Recommandation',{});
} );


app.use(express.static('client'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
