const express = require("express");
const {
  listMessagesController,
  addMessageController,
  removeMessageController,
} = require("../../controllers/messagesController");

const { postValidation } = require("../../middlewares/validationMiddleware");

const router = new express.Router();

router.get("/messages/", listMessagesController);
router.post("/messages/", postValidation, addMessageController);
router.delete("/messages/:messageId", removeMessageController);

module.exports = router;
