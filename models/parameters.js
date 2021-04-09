const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParametersSchema = new Schema({
  ref: "user",

  p_age: {
    type: Array,
    required: true,
  },

  p_sex: {
    type: String,
    required: true,
  },

  p_bodystyle: {
    type: String,
    required: true,
  },

  p_race: {
    type: String,
    required: true,
  },
});

const Parameters = mongoose.model("Parameters", ParametersSchema);

module.exports = Parameters;
