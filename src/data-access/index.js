import  PmDB from './pmdb'
import  { MongoClient }  from 'mongodb'
// const testUrl= 'mongodb://127.0.0.1:27017'
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
let client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })

async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
    console.log('db connected')
  }
  return client.db('PM')
}

let ProductManagementDB = new  PmDB(makeDb)
 export default ProductManagementDB
