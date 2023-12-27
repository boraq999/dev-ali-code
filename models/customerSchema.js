const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  age: String,
  country: String,
  gender: String,
});

// Create modal and saved in mongoose DB ==> mongoose.model(Table in mongoose DB, Schema);
const User = mongoose.model("customer", dataSchema);

// Export Modal
module.exports = User;
