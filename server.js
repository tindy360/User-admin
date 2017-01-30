const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const User = require('./models/users');
//const {PORT, DATABASE_URL} = require('module');

//connect db
mongoose.connect('mongodb://localhost:27017/userdb/users')

app.use(express.static(__dirname + '/public'));
//get requests to root url will load app
app.get('/', (req, res)=> {
    res.send('index');
});
//get requets to
app.get('/users', (req, res)=>{
  res.send(
    user.find({users})
  )
});

app.post('/users/add', (err, req, res)=>{
  const user = new User();
  user.userName = req.body.username;
  user.email = req.body.email;
  user.passwrd = req.body.password;

  user.save();


});


app.listen(process.env.PORT || 8080, function() {
console.log('running on 8080')
});
