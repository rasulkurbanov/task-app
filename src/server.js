const { MongoClient, ObjectId } = require('mongodb')
const connnectionURL = require('./db')
const database = 'tasks-app'


MongoClient.connect(connnectionURL, {useUnifiedTopology: true, useNewUrlParser: true}, async(err, client) => {
  if(err) {
    console.log(err)
  }

  let db = client.db(database)  

  // const collection1 = db.collection('users').insertOne({username: 'johndoe1', fullname: 'John Doe'}, (err, result) => {
  //   if(err) console.log(err)
  // })

  // db.collection('tasks').insertMany([
  //   {description: "At least 100 push-ups", completed: false}
  // ], (err, result) => {
  //   if(err) console.log(err)
  //   console.log(result)
  // }
  // ) 

  // db.collection('tasks').findOne({_id: ObjectId("5fe37f181b3aa6446b4a23c3")}, (err, result) => {
  //   if(err) console.log(err)

  //   console.log(result)
  //  })


  try {
    const result = await db.collection('tasks').updateMany({completed: false}, {$set: {completed: true}} )
    console.log(result.result)
  }
  catch(err) {
    console.log(err)
  }


 
})