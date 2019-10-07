const Service = require('./league.service');
const {
  createNewLeague,
  deleteLeagueById,
  editLeagueById,
  getAllLeagues,
  addUserToLeague,
  getLeagueById,
} = new Service();

class LeagueController {
  async getAllLeagues(req, res) {
    try {
      res.send(await getAllLeagues());
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async getLeagueById(req, res) {
    const { leagueId } = req.params;
    try {
      res.send(await getLeagueById(leagueId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async createNewLeague(req, res) {
    try {
      res.send(await createNewLeague(req.body));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async editLeagueById(req, res) {
    const { leagueId } = req.params;
    try {
      res.send(await editLeagueById(leagueId, req.body));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async deleteLeagueById(req, res) {
    const { leagueId } = req.params;
    try {
      res.send(await deleteLeagueById(leagueId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  async addUserToLeague(req, res) {
    const { leagueId } = req.params;
    const { userId } = req.body;
    try {
      res.send(await addUserToLeague(leagueId, userId));
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
}

module.exports = LeagueController;
