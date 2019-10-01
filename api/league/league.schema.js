const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema ({
	title: {type: String, required: true},
	description: {type: String, required: true},
	season: {type: String, required: true},
	stages: [{
		type: Schema.Types.ObjectID,
		ref: 'stage'
	}],
	users: [{
		type: Schema.Types.ObjectID,
		ref: 'user'
	}]
});

module.exports = mongoose.model('league', leagueSchema );
