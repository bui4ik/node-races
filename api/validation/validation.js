const Joi = require('joi');

const userSchema = Joi.object().keys({
	name: Joi.string().min(3).required(),
	surname: Joi.string().min(3).required(),
	username: Joi.string().min(3).required()
});

module.exports = userSchema;
