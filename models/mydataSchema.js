const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  userNamee: String,
});

// Create modal and saved in mongoose DB ==> mongoose.model(Table in mongoose DB, Schema);
const Mydata = mongoose.model("Mydataaa", dataSchema);

// Export Modal
module.exports = Mydata;


mongoose.model("hammam", dataSchema)