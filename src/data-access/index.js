import  PmDB from './pmdb'
import  { MongoClient }  from 'mongodb'
// const testUrl= 'mongodb://127.0.0.1:27017'
const MONGO_URL_DEV='mongodb+srv://sunkanmi:sunkanmi123@cluster0.2kcil.mongodb.net/projectmanagement?retryWrites=true&w=majority'
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING
let client = new MongoClient(DB_CONNECTION_STRING ||  MONGO_URL_DEV, { useNewUrlParser: true, useUnifiedTopology: true })

async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db('PM')
}

let ProductManagementDB = new  PmDB(makeDb)
 export default ProductManagementDB
