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
  },

},
{collection: 'users'}
);

const User = module.exports = mongoose.model('User', userSchema);
