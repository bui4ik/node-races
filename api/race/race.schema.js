const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema ({
	title: {
		type: String,
		required: true
	},
	time: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	stage: {
		type: Schema.Types.ObjectId,
		ref: 'stage'
	}
});

module.exports = mongoose.model('race', raceSchema );
