const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const modles = mongoose.Schema;
const expressValidator = require('express-validator');



app.use(express.static(__dirname + '/public'));
//validation middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }

app.get('/', (req, res)=> {
    res.send('index');
});

app.get('/users', (req, res)=>{
  send
});

app.post('/users/add', (err, req, res)=>{
    req.checkBody('firstName', 'Please enter a first name.').notEmpty();
    req.checkBody('lastName', 'Please enter a last name.').notEmpty();
    req.checkBody('email', 'Please enter an email.').notEmpty();
    /*req.check({
      'email': {
        in: body
        notEmpty: true,
        isEmail: {}
      }
  })*/
   const errors = req.validationErrors();

    const newUser = {
      firstName: req.body.firstName
      lastName: req.body.lastName
      email: req.body.email
    }
    console.log('user added')
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
