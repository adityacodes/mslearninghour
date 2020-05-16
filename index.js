const express = require('express');
const app = express();
app.set('view engine', 'pug')
app.use(express.static('public'))

const port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.render('index', { title: 'ExpressJS WebApp with Azure Cloud', message: 'Hello Aditya!' })
});


app.listen(port, () => { console.log(`App listening at http://localhost:${port}`); });