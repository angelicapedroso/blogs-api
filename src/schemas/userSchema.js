const Joi = require('joi');

const msgEmail = '"email" must be a valid email';
const msgName = '"displayName" length must be at least 8 characters long';
const msgPassword = '"password" length must be at least 6 characters long';

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8).messages({ 'string.min': msgName }),
  email: Joi.string().required().email().messages({ 'string.email': msgEmail }),
  password: Joi.string().required().min(6).messages({ 'string.min': msgPassword }),
  image: Joi.string().required(),
});

module.exports = { userSchema };
