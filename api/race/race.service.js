const Race = require('./race.schema');
const User = require('../user/user.schema');
const Stage = require('../stage/stage.schema');

class RaceService {
	async getAllRaces(res){
		try {
			res.send(await Race.find({}))
		} catch (e) {
			res.send(e)
		}
	}

	async createNewRace(req, res){
		let newRace = new Race({
			title: req.body.title,
			time: req.body.time,
			description: req.body.description
		});
		try {
			await newRace.save();
			res.send(newRace)
		} catch (e) {
			res.send(e)
		}
	}

	async editRace(req, res){
		try {
			await Race.updateOne({_id: req.body.id}, {$set:
					{
						title: req.body.title,
						time: req.body.time,
						description: req.body.description
					}});
			res.send(`Race with id: ${req.body.id} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteRace(req, res){
		try {
			await Race.deleteOne({_id: req.body.id});
			res.send(`Race with id: ${req.body._id} was successfully removed`)
		} catch (e) {
			res.send(e)
		}
	}

	async createCompleteRace(req, res){
		const { userId, stageId } = req.body;
		console.log(req.body);
		const user = await User.findById(userId);
		const stage = await Stage.findById(stageId);
		if (user.leagues.includes(stage.league)){
			const newRace = new Race({
				title: req.body.title,
				time: req.body.time,
				description: req.body.description,
			});
			newRace.user = user;
			newRace.stage = stage;
			await newRace.save();
			user.races.push(newRace);
			await user.save();
			stage.races.push(newRace);
			await stage.save();
			res.send(newRace)
		} else {
			res.status(404).send('No user in such league');
		}
	}

	async deleteRaceById(req, res){
		const { raceId } = req.params;
		const race = Race.findById(raceId);
		if (!race){
			return res.status(404).send('Race with such id does not exist')
		}
		await Race.deleteOne({_id:raceId});
		res.send(`Race with id: ${raceId} was successfully removed`)
	}
}

module.exports = RaceService;
