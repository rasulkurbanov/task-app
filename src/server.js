const MongoClient = require('mongodb').MongoClient
const connnectionURL = require('./db')
const database = 'tasks-app'


MongoClient.connect(connnectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
  if(err) {
    console.log(err)
  }

  let db = client.db(database)  

  const collection1 = db.collection('users').insertOne({username: 'johndoe1', fullname: 'John Doe'}, (err, result) => {
    if(err) console.log(err)
  })

  console.log(`Connected successfully`)
 
})