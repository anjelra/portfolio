const express = require('express');
const path = require('path');
const app = express();

console.log(path.join(__dirname, './public/index.html'));
app.use(express.static(path.join(__dirname, './public')));

app.listen(3005, function() {
    console.log('3005');
})


module.exports = app;