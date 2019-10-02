const LeagueController = require('./league.controller');
const leagueController = new LeagueController();

function leagueRouter(app){
	app.route('/leagues')
		.get(leagueController.getAllLeagues.bind(leagueController))
		.post(leagueController.createNewLeague.bind(leagueController));
	app.route('/leagues/:leagueId')
		.get(leagueController.getLeagueById.bind(leagueController))
		.put(leagueController.editLeagueById.bind(leagueController))
		.delete(leagueController.deleteLeagueById.bind(leagueController));
	app.route('/leagues/:leagueId/users')
		.post(leagueController.addUserToLeague.bind(leagueController));
}

module.exports = leagueRouter;
