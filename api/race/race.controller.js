const Service = require('./race.service');
const {createNewRace, deleteRace, editRace, getAllRaces, createCompleteRace, deleteRaceById} = new Service();

class RaceController {
	getAllRaces(req, res){
		getAllRaces(res)
	};

	postNewRace (req,res) {
		createNewRace(req, res)
	}

	editRace (req, res) {
		editRace(req, res);
	}

	deleteRace (req, res) {
		deleteRace(req, res)
	}

	createCompleteRace(req, res){
		createCompleteRace(req, res)
	}

	deleteRaceById(req, res){
		deleteRaceById(req, res)
	}
}

module.exports = RaceController;
