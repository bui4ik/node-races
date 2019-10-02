const Race = require('./race.schema');
const Stage = require('../stage/stage.schema');
const League = require('../league/league.schema');

class RaceService {
	async getAllRaces(res){
		try {
			res.send(await Race.find({}))
		} catch (e) {
			res.send(e)
		}
	}

	async getRaceById(req, res){
		const { raceId } = req.params;
		try {
			const race = await Race.findById(raceId);
			res.send(race)
		} catch (e) {
			res.status(404).send(`No race with such id`)
		}
	}

	async createNewRace(req, res){
		const { userId, stageId } = req.body;
		try {
			const stage = await Stage.findById(stageId);
			const league = await League.findById(stage.leagueId);
			if (!league.users.includes(userId)) {
				res.send('user not in this league')
			} else if (league.users.includes(userId)) {
				let newRace = new Race(req.body);
				await newRace.save();
				res.send(newRace)
			}
		} catch (e) {
			res.status(404).send(e.message)
		}
	}

	async editRaceById(req, res){
		const { raceId } = req.params;
		try {
			await Race.updateOne({_id: raceId}, {$set:
					{
						title: req.body.title,
						time: req.body.time,
						description: req.body.description
					}});
			res.send(`Race with id: ${raceId} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteRaceById(req, res){
		const { raceId } = req.params;
		try {
			await Race.deleteOne({_id: raceId});
			res.send(`Race with id: ${raceId} was successfully removed`)
		} catch (e) {
			res.status(404).send('Race with such id does not exist')
		}
	}

	async racesWithStagesBySeason(req, res){
		const { season } = req.params;
		try {
			const result = await League.aggregate([
				{ $match: {
						season: `${season}`
					}},
				{ $lookup: {
						from: 'stages',
						localField: '_id',
						foreignField: 'leagueId',
						as: 'stages'
					}},
				{ $project: { stages: 1, _id: 0}},
				{$unwind : {
						path:'$stages',
						preserveNullAndEmptyArrays: true
					}},
				{ $lookup: {
						from: 'races',
						localField: 'stages._id',
						foreignField: 'stageId',
						as: 'stages.races'
					}}
			]);
			res.send(result)
		} catch (e) {
			res.status(404).send(e)
		}
	}
}

module.exports = RaceService;
