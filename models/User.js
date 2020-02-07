const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  birthDay: {
    type: String,
    default: "03.05.1997"
  }
});

module.exports = mongoose.model("User", UserSchema);
