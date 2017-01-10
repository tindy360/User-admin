const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=> {
    res.send('index');
});

app.get('/users', (req, res)=>{
  send 
});

app.listen(process.env.PORT || 8080, function() {
console.log('running on 8080')
});
