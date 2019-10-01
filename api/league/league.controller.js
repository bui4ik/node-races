const Service = require('./league.service');
const {createNewLeague, deleteLeague, editLeague, getAllLeagues, addUserToLeague, getLeagueById, getLeagueUsers, createLeagueStage, getLeagueStages} = new Service();

class LeagueController {
	getAllLeagues(req, res){
		getAllLeagues(res)
	};

	getLeagueById(req, res){
		getLeagueById(req, res)
	}

	getLeagueUsers(req, res){
		getLeagueUsers(req, res)
	}

	postNewLeague(req,res) {
		createNewLeague(req, res)
	}

	addUserToLeague(req, res){
		addUserToLeague(req, res)
	}

	createLeagueStage(req, res){
		createLeagueStage(req, res)
	}

	getLeagueStages(req, res){
		getLeagueStages(req, res)
	}

	editLeague(req, res) {
		editLeague(req, res);
	}

	deleteLeague(req, res) {
		deleteLeague(req, res)
	}
}

module.exports = LeagueController;
