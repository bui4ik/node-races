const Service = require('./league.service');
const {createNewLeague, deleteLeagueById, editLeagueById, getAllLeagues, addUserToLeague, getLeagueById } = new Service();

class LeagueController {
	getAllLeagues(req, res){
		getAllLeagues(res)
	};

	getLeagueById(req, res){
		getLeagueById(req, res)
	}

	createNewLeague(req,res) {
		createNewLeague(req, res)
	}

	editLeagueById(req, res) {
		editLeagueById(req, res);
	}

	deleteLeagueById(req, res) {
		deleteLeagueById(req, res)
	}

	addUserToLeague(req, res){
		addUserToLeague(req, res)
	}

}

module.exports = LeagueController;
