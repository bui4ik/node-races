const express = require("express");
const router = express.Router();
const LeagueController = require('./league.controller');
const leagueController = new LeagueController();

function leagueRouter(){
	router.route('/')
		.get(leagueController.getAllLeagues.bind(leagueController))
		.post(leagueController.createNewLeague.bind(leagueController));
	router.route('/:leagueId')
		.get(leagueController.getLeagueById.bind(leagueController))
		.put(leagueController.editLeagueById.bind(leagueController))
		.delete(leagueController.deleteLeagueById.bind(leagueController));
	router.route('/:leagueId/users')
		.post(leagueController.addUserToLeague.bind(leagueController));
	return router
}

module.exports = leagueRouter;
