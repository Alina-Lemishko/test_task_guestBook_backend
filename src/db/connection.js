const mongoose = require("mongoose");
require("dotenv").config();

const uriDb = process.env.DB_HOST;

const connectMongo = async () => {
  return mongoose.connect(uriDb, { dbName: "db-guest-book" });
};

module.exports = {
  connectMongo,
};
