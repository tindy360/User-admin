const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const User = require('./models/users');
const users = require('./models/users');
//const {PORT, DATABASE_URL} = require('module');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//connect db
mongoose.connect('mongodb://localhost:27017/userdb/users')
app.use(express.static(__dirname + '/public'));
//get requests to root url will load app
app.get('/', (req, res)=> {
    res.send('index');
});
//get requets to
app.get('/users', (req, res)=>{
  User.find({}, (err, user)=> {
    if(err) {
      res.send(err)
    }
    res.json(user)
  //  console.log(user)
  })
});

app.post('/users/add', (req, res)=>{
  console.log(req.body)
  const user = new User();
  user.userName = req.body.userName;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save();

});

app.post('/users/delete/:id', (req, res)=>{

  console.log(req.params.id);
  User.findByIdAndRemove(req.params.id).exec();

});

app.listen(process.env.PORT || 8080, function() {
console.log('running on 8080')
});
