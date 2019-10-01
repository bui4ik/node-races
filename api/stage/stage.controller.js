const Service = require('./stage.service');
const {createNewStage, deleteStage, editStage, getAllStages} = new Service();

class StageController {
	getAllStages(req, res){
		getAllStages(res)
	};

	postNewStage(req,res) {
		createNewStage(req, res)
	}

	editStage(req, res) {
		editStage(req, res);
	}

	deleteStage(req, res) {
		deleteStage(req, res)
	}
}

module.exports = StageController;
