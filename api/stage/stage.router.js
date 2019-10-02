const StageController = require('./stage.controller');
const stageController = new StageController();

function stageRouter(app){
	app.route('/stages')
		.get(stageController.getAllStages.bind(stageController))
		.post(stageController.createNewStage.bind(stageController));
	app.route('/stages/:stageId')
		.get(stageController.getStageById.bind(stageController))
		.put(stageController.editStageById.bind(stageController))
		.delete(stageController.deleteStageById.bind(stageController));
	app.route('/stages/:stageId/league')
		.post(stageController.addLeagueToStage.bind(stageController));
}

module.exports = stageRouter;
