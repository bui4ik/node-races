const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema ({
	title: {type: String, required: true},
	description: {type: String, required: true},
	geolocation: {type: [Number], required: true},
	races: [{
		type: Schema.Types.ObjectID,
		ref: 'race'
	}],
	league: {
		type: Schema.Types.ObjectID,
		ref: 'league'
	}
});

module.exports = mongoose.model('stage', stageSchema );
