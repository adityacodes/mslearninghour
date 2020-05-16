const express = require('express');
const app = express();
app.set('view engine', 'pug')

const port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello Aditya!' })
});


app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`); });