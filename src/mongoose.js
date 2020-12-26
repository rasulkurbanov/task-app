const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({

})


const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number
  }
})


const User = new mongoose.model('User', UserSchema)