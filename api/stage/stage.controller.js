const Service = require('./stage.service');
const {
  createNewStage,
  deleteStageById,
  editStageById,
  getAllStages,
  getStageById,
  addLeagueToStage,
} = new Service();

class StageController {
  async getAllStages(req, res) {
    try {
      res.send(await getAllStages());
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async getStageById(req, res) {
    const { stageId } = req.params;
    try {
      res.send(await getStageById(stageId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async createNewStage(req, res) {
    try {
      res.send(await createNewStage(req.body));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async editStageById(req, res) {
    const { stageId } = req.params;
    try {
      res.send(await editStageById(stageId, req.body));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async deleteStageById(req, res) {
    const { stageId } = req.params;
    try {
      res.send(await deleteStageById(stageId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async addLeagueToStage(req, res) {
    const { stageId } = req.params;
    const { leagueId } = req.body;
    try {
      res.send(await addLeagueToStage(stageId, leagueId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
}

module.exports = StageController;
