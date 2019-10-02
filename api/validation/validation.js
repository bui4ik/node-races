const Joi = require('joi');

const schema = Joi.object().keys({
	name: Joi.string(),
	surname: Joi.string(),
	username: Joi.string()
});

async function validator(body) {
	return  await Joi.validate(body, schema);
}



module.exports = validator;
