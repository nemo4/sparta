const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
//   productsId: {
//     type: Number,
//     required: true,
//     unique: true
//   },
  name: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  regNm: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  regDt: {
    type: String
  }
});

module.exports = mongoose.model("Products", productsSchema);