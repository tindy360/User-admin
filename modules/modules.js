const mongoose =require('mongoose');

const userSchema = mongoose.Schema ({
  userName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    reqired: true
  },
  password:{
    type: String,
    reqired: true
  }
});

const User = module.exports = mongoos.model('User', userSchema);
