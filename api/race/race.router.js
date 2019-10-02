const RaceController = require('./race.controller');
const raceController = new RaceController();

function raceRouter(app){
	app.route('/races')
		.get(raceController.getAllRaces.bind(raceController))
		.post(raceController.createNewRace.bind(raceController));
	app.route('/races/:raceId')
		.get(raceController.getRaceById.bind(raceController))
		.put(raceController.editRaceById.bind(raceController))
		.delete(raceController.deleteRaceById.bind(raceController));
	app.route('/racesWithStagesBySeason/:season')
		.get(raceController.racesWithStagesBySeason.bind(raceController));
}

module.exports = raceRouter;
