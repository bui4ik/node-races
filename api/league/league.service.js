const League = require('./league.schema');
const User = require('../user/user.schema');
const Stage = require('../stage/stage.schema');
const Race = require('../race/race.schema');

class LeagueService {
	async getAllLeagues(res){
		try {
			res.send(await League.find({}))
		} catch (e) {
			res.send(e)
		}
	}

	async getLeagueById(req, res){
		const { leagueId } = req.params;
		try {
			const league = await League.findById(leagueId);
			res.send(league)
		} catch (e) {
			res.status(404).send('No league with such id')
		}
	}

	async createNewLeague(req, res){
		let newLeague = new League(req.body);
		try {
			await newLeague.save();
			res.send(newLeague)
		} catch (e) {
			res.send(e)
		}
	}

	async addUserToLeague(req, res){
		const { leagueId } = req.params;
		try {
			const league = await League.findById(leagueId);
			const { userId } = req.body;
			const user = await User.findById(userId);
			if (league.users.includes(userId)) {
				return res.status(404).send('This user already in this league')
			}
			league.users.push(user._id);
			await league.save();
			res.send(league)
		} catch (e) {
			return res.status(404).send(e)
		}
	};

	async editLeagueById(req, res){
		const { leagueId } = req.params;
		try {
			await League.updateOne({_id: leagueId}, {$set:
					{
						title: req.body.title,
						description: req.body.description,
						season: req.body.season
					}});
			res.send(`League with id: ${leagueId} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteLeagueById(req, res){
		const { leagueId } = req.params;
		try {
			const stages = await Stage.find({leagueId: leagueId});
			const stagesId = stages.map( stage => stage.id);
			for (let i = 0; i<=stagesId.length; i++){
				await Race.deleteMany({stageId: stagesId[i]})
			}
			await Stage.deleteMany({leagueId: leagueId});
			await League.deleteOne({_id: leagueId});
			res.send(`League with id: ${leagueId} was successfully removed`)
		} catch (e) {
			res.send(e)
		}
	}
}

module.exports = LeagueService;
