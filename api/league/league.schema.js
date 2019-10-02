const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema ({
	title: {type: String, required: true},
	description: {type: String, required: true},
	season: {type: String, required: true},
	users: {type: [Schema.Types.ObjectID]}
});

module.exports = mongoose.model('league', leagueSchema );
