const Stage = require('./stage.schema');
const Race = require('../race/race.schema');

class StageService {
	async getAllStages(res){
		try {
			res.send(await Stage.find({}))
		} catch (e) {
			res.send(e)
		}
	}

	async createNewStage(req, res){
		let newStage = new Stage(req.body);
		try {
			await newStage.save();
			res.send(newStage)
		} catch (e) {
			res.send(e)
		}
	}

	async getStageById(req, res){
		const { stageId } = req.params;
		try {
			const stage = await Stage.findById(stageId);
			res.send(stage)
		} catch (e) {
			res.status(404).send(`No stage with such id`)
		}
	}

	async editStageById(req, res){
		const { stageId } = req.params;
		try {
			await Stage.updateOne({_id: stageId}, {$set:
					{
						title: req.body.title,
						description: req.body.description,
						geolocation: req.body.geolocation
					}});
			res.send(`Stage with id: ${stageId} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteStageById(req, res){
		const { stageId } = req.params;
		try {
			await Race.deleteMany({stageId: stageId});
			await Stage.deleteOne({_id: stageId});
			res.send(`Stage with id: ${stageId} was successfully removed`)
		} catch (e) {
			res.send(e)
		}
	}

	async addLeagueToStage(req, res){
		const { stageId } = req.params;
		const { leagueId } = req.body;
		try {
			const stage = await Stage.findById(stageId);
			stage.league = leagueId;
			await stage.save();
			res.send(stage)
		} catch (e) {
			res.status(404).send(e)
		}
	}

}

module.exports = StageService;
