const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const modles = mongoose.Schema;



app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=> {
    res.send('index');
});

app.get('/users', (req, res)=>{
  send
});

app.post('/users', (err, req, res)=>{
  const requiredFields = ['firstName', 'lastName', 'email'];
  if (!(field in req.body && req.body[feild])) {
    return res.status(400).json({message: 'Please enter a response for ${field}'})
  }

  // res.send('users')
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
