/**
 * Created by nightost on 16/4/13.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(4001, function () {
    console.log('Example app listening on port 4000!');
});