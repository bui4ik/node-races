const express = require("express");
const router = express.Router();
const RaceController = require('./race.controller');
const raceController = new RaceController();

function raceRouter(){
	router.route('/')
		.get(raceController.getAllRaces.bind(raceController))
		.post(raceController.createNewRace.bind(raceController));
	router.route('/:raceId')
		.get(raceController.getRaceById.bind(raceController))
		.put(raceController.editRaceById.bind(raceController))
		.delete(raceController.deleteRaceById.bind(raceController));
	router.route('/racesWithStagesBySeason/:season')
		.get(raceController.racesWithStagesBySeason.bind(raceController));
	return router
}

module.exports = raceRouter;
