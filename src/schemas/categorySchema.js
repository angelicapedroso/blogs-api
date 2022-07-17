const Joi = require('joi');

const msg = '"name" is required';

const categorySchema = Joi.object({
  name: Joi.string().required().messages({ 'string.required': msg }),
});

module.exports = { categorySchema };
