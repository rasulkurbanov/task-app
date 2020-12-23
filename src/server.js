const MongoClient = require('mongodb').MongoClient
const connnectionURL = require('./db')
const database = 'tasks-app'

MongoClient.connect(connnectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, async(err, client) => {
  if(err) {
    console.log(err)
  }


  const db = client.db(database)

  const collection = db.collection('users').insertOne({username: 'johndoe1', fullname: 'John Doe'}, (err, result) => {
    if(err) console.log(err)
    console.log(result)
  })

 
})