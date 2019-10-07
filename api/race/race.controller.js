const Service = require('./race.service');
const {
  createNewRace,
  editRaceById,
  getAllRaces,
  deleteRaceById,
  getRaceById,
  racesWithStagesBySeason,
} = new Service();

class RaceController {
  async getAllRaces(req, res) {
    try {
      res.send(await getAllRaces());
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async getRaceById(req, res) {
    const { raceId } = req.params;
    try {
      res.send(await getRaceById(raceId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async createNewRace(req, res) {
    try {
      res.send(await createNewRace(req.body));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async editRaceById(req, res) {
    const { raceId } = req.params;
    try {
      res.send(await editRaceById(raceId, req.body));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async deleteRaceById(req, res) {
    const { raceId } = req.params;
    try {
      res.send(await deleteRaceById(raceId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async racesWithStagesBySeason(req, res) {
    const { season } = req.params;
    try {
      res.send(await racesWithStagesBySeason(season));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
}

module.exports = RaceController;
