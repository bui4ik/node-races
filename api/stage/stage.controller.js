const Service = require('./stage.service');
const {createNewStage, deleteStageById, editStageById, getAllStages, getStageById, addLeagueToStage} = new Service();

class StageController {
	getAllStages(req, res){
		getAllStages(res)
	};

	getStageById(req, res){
		getStageById(req, res)
	}

	createNewStage(req,res) {
		createNewStage(req, res)
	}

	editStageById(req, res) {
		editStageById(req, res);
	}

	deleteStageById(req, res) {
		deleteStageById(req, res)
	}

	addLeagueToStage(req, res) {
		addLeagueToStage(req, res)
	}
}

module.exports = StageController;
