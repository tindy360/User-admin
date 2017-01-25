const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise,
//const {PORT, DATABASE_URL} = require('module');


mongoose.connect('mongodb://localhost/userdb/users')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.send('index');
});

app.get('/users', (req, res)=>{
  send
});

app.post('/users/add', (err, req, res)=>{
//  if error, {
  //  throw error

  //else {
    const newUser = {
      userName: req.body.userName
      password: req.body.password
      email: req.body.email
    //}
    console.log('user added')
  }
  }


});

app.post('/delete', (err, req, res) => {
  //check through db for entry return error if missing
  const dbCheck()
    }
  }

})

app.listen(process.env.PORT || 8080, function() {
console.log('running on 8080')
});
