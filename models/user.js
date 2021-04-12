const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    uuid: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  { strict: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
