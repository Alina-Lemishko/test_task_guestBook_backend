const Joi = require("joi");

module.exports = {
  postValidation: (req, res, next) => {
    const schema = Joi.object({
      nameUser: Joi.string().min(2).max(20).required(),
      message: Joi.string().min(4).max(400).required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.message });
    }
    next();
  },
};
