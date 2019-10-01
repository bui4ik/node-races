const UsersController  = require('./api/user/user.controller');
const RaceController = require('./api/race/race.controller');
const StageController = require('./api/stage/stage.controller');
const LeagueController = require('./api/league/league.controller');
const userController = new UsersController();
const raceController = new RaceController();
const stageController = new StageController();
const leagueController = new LeagueController();

function router(app) {
	app.route('/users')
		.get(userController.getAllUsers.bind(userController))
		.post(userController.postNewUser.bind(userController))
		.put(userController.editUser.bind(userController))
		.delete(userController.deleteUser.bind(userController));
	app.route('/users/:userId')
		.get(userController.getUserById.bind(userController))
		.delete(userController.deleteUserById.bind(userController));
	app.route('/users/:userId/races')
		.get(userController.getAllUserRaces.bind(userController))
		.post(userController.newUserRace.bind(userController));
	app.route('/races')
		.get(raceController.getAllRaces.bind(raceController))
		.post(raceController.postNewRace.bind(raceController))
		.put(raceController.editRace.bind(raceController))
		.delete(raceController.deleteRace.bind(raceController));
	app.route('/races/:raceId')
		.delete(raceController.deleteRaceById.bind(raceController));
	app.route('/races/create')
		.post(raceController.createCompleteRace.bind(raceController));
	app.route('/stages')
		.get(stageController.getAllStages.bind(stageController))
		.post(stageController.postNewStage.bind(stageController))
		.put(stageController.editStage.bind(stageController))
		.delete(stageController.deleteStage.bind(stageController));
	app.route('/leagues')
		.get(leagueController.getAllLeagues.bind(leagueController))
		.post(leagueController.postNewLeague.bind(leagueController))
		.put(leagueController.editLeague.bind(leagueController))
		.delete(leagueController.deleteLeague.bind(leagueController));
	app.route('/leagues/:leagueId')
		.get(leagueController.getLeagueById.bind(leagueController));
	app.route('/leagues/:leagueId/users')
		.get(leagueController.getLeagueUsers.bind(leagueController))
		.post(leagueController.addUserToLeague.bind(leagueController));
	app.route('/leagues/:leagueId/stages')
		.get(leagueController.getLeagueStages.bind(leagueController))
		.post(leagueController.createLeagueStage.bind(leagueController))
}

module.exports = router;
