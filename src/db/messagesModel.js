const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const messagesSchema = new Schema({
  nameUser: {
    type: String,
    required: [true, "Set name for message"],
  },
  message: {
    type: String,
    required: [true, "Set text for message"],
  },
  time: {
    type: String,
    default: new Date(),
  },
});

const Messages = model("Messages", messagesSchema);

module.exports = {
  Messages,
};
