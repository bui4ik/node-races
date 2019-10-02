const Service = require('./race.service');
const {createNewRace, editRaceById, getAllRaces, deleteRaceById, getRaceById, racesWithStagesBySeason} = new Service();

class RaceController {
	getAllRaces(req, res){
		getAllRaces(res)
	};

	getRaceById(req, res){
		getRaceById(req, res)
	}

	createNewRace(req,res) {
		createNewRace(req, res)
	}

	editRaceById(req, res) {
		editRaceById(req, res);
	}

	deleteRaceById(req, res){
		deleteRaceById(req, res)
	}

	racesWithStagesBySeason(req, res){
		racesWithStagesBySeason(req, res)
	}
}

module.exports = RaceController;
