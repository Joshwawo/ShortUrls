const express = require('express');
const { create, engine } = require('express-handlebars');
require('dotenv').config();
require('./database/db');
const app = express();
const port = 3000;


const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],

});

app.engine(".hbs", hbs.engine);
app.set('view engine', ".hbs");
app.set('views', "./views");



//Midlerware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}))
app.use('/', require('./routes/home'))
app.use('/auth', require('./routes/auth'))
// app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});
