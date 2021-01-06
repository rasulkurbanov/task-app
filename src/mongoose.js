const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, `Please add a title`]
  },
  description: {
    type: String,
    maxLength: [255, `No more than 255`]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
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
