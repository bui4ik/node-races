const stage = require('./stage.schema');

class StageService {
	async getAllStages(res){
		try {
			res.send(await stage.find({}))
		} catch (e) {
			res.send(e)
		}
	}

	async createNewStage(req, res){
		let newStage = new stage({
			title: req.body.title,
			description: req.body.description,
			geolocation: req.body.geolocation
		});
		try {
			await newStage.save();
			res.send(newStage)
		} catch (e) {
			res.send(e)
		}
	}

	async editStage(req, res){
		try {
			await stage.updateOne({_id: req.body.id}, {$set:
					{
						title: req.body.title,
						description: req.body.description,
						geolocation: req.body.geolocation
					}});
			res.send(`Stage with id: ${req.body.id} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteStage(req, res){
		console.log(req.body.id);
		try {
			await stage.deleteOne({_id: req.body.id});
			res.send(`Stage with id: ${req.body.id} was successfully removed`)
		} catch (e) {
			res.send(e)
		}
	}

}

module.exports = StageService;
