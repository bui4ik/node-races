const express = require("express");
const router = express.Router();
const StageController = require('./stage.controller');
const stageController = new StageController();

function stageRouter(){
	router.route('/')
		.get(stageController.getAllStages.bind(stageController))
		.post(stageController.createNewStage.bind(stageController));
	router.route('/:stageId')
		.get(stageController.getStageById.bind(stageController))
		.put(stageController.editStageById.bind(stageController))
		.delete(stageController.deleteStageById.bind(stageController));
	router.route('/:stageId/league')
		.post(stageController.addLeagueToStage.bind(stageController));
	return router
}

module.exports = stageRouter;
