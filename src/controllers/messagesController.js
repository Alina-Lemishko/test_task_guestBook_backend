const {
  listMessages,
  addMessage,
  removeMessage,
} = require("../services/messagesService");

const listMessagesController = async (req, res, next) => {
  try {
    const data = await listMessages();
    return res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const addMessageController = async (req, res) => {
  try {
    const data = await addMessage(req.body);
    res.status(201).json({ data });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const removeMessageController = async (req, res) => {
  try {
    const { messageId } = req.params;
    await removeMessage(messageId);
    res.status(200).json({ message: "message was deleted" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  listMessagesController,
  addMessageController,
  removeMessageController,
};
