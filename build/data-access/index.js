"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pmdb = _interopRequireDefault(require("./pmdb"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const testUrl= 'mongodb://127.0.0.1:27017'
const MONGO_URL_DEV = 'mongodb+srv://sunkanmi:sunkanmi123@cluster0.2kcil.mongodb.net/projectmanagement?retryWrites=true&w=majority';
const DB_CONNECTION_STRING = process && process.env && process.env.DB_CONNECTION_STRING || "mongodb+srv://sunkanmi:sunkanmi123@cluster0.2kcil.mongodb.net/projectmanagement?retryWrites=true&w=majority";
let client = new _mongodb.MongoClient(DB_CONNECTION_STRING || MONGO_URL_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }

  return client.db('PM');
}

let ProductManagementDB = new _pmdb.default(makeDb);
var _default = ProductManagementDB;
exports.default = _default;