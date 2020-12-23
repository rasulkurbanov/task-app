const connnectionURL = 'mongodb://localhost:27017/'


// async function connectDb() {
//   try{
//     const db = await MongoClient.connect(connnectionURL, {useUnifiedTopology: true})

//     db.collection('Tasks', (err, collection) => {
//       collection.insert({id:1, firstName: 'Morning routine'})
//       collection.insert({id:2, firstName: 'Do some stuff'})

//     })


//     console.log(`Successfully connected to mongodb`)
//   }
//   catch(err) {
//     console.log(err)
//   }
// }



module.exports = connnectionURL