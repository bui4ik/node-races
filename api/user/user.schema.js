const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
	name: {type: String, required: true},
	surname: {type: String, required: true},
	username: {type: String, required: true},
	races: [{
		type: Schema.Types.ObjectID,
		ref: 'race'
	}],
	leagues: [{
		type: Schema.Types.ObjectID,
		ref: 'league'
	}]
});

module.exports = mongoose.model('user', userSchema );
