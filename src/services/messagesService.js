const { Messages } = require("../db/messagesModel");
const { GuestBookError, ValidationError } = require("../helpers/errors");

const listMessages = async () => {
  const messages = await Messages.find({}).sort({ time: -1 });
  return messages;
};

const addMessage = async (body) => {
  if (!body.nameUser || !body.message) {
    throw new ValidationError("missing required field");
  }

  const message = new Messages({
    ...body,
    time: new Date(),
  });
  await message.save();
  return message;
};

const removeMessage = async (id) => {
  const messageId = String(id);
  const messageById = await Messages.findOne({ _id: messageId });

  if (!messageById) {
    throw new GuestBookError("Not Found");
  }
  console.log("messageId", messageId);
  await Messages.findOneAndRemove({ _id: messageId });
};

module.exports = {
  listMessages,
  removeMessage,
  addMessage,
};
