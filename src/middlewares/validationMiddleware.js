const Joi = require("joi");

module.exports = {
  postValidation: (req, res, next) => {
    const schema = Joi.object({
      nameUser: Joi.string()
        // .pattern(new RegExp("^[a-zA-Z0-9_]{1,2}*$"))
        .min(2)
        .max(20)
        .required(),
      message: Joi.string().min(1).max(400).required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.message });
    }
    next();
  },
};