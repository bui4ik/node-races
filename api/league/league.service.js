const League = require('./league.schema');
const User = require('../user/user.schema');
const Stage = require('../stage/stage.schema');

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
		const league = await League.findById(leagueId);
		res.send(league)
	}

	async getLeagueUsers(req, res){
		const { leagueId } = req.params;
		const league = await League.findById(leagueId).populate('users');
		res.send(league.users)
	}

	async createNewLeague(req, res){
		let newLeague = new League({
			title: req.body.title,
			description: req.body.description,
			season: req.body.season
		});
		try {
			await newLeague.save();
			res.send(newLeague)
		} catch (e) {
			res.send(e)
		}
	}

	async addUserToLeague(req, res){
		const { leagueId } = req.params;
		const league = await League.findById(leagueId);
		const { userId } = req.body;
		const user = await User.findById(userId);
		league.users.push(user);
		user.leagues.push(league);
		await user.save();
		await league.save();
		res.send(league)
	};

	async createLeagueStage(req, res){
		const { leagueId } = req.params;
		const league = await League.findById(leagueId);
		const newStage = new Stage(req.body);
		newStage.league = league;
		await newStage.save();
		league.stages.push(newStage);
		await league.save();
		res.send(newStage)
	}

	async getLeagueStages(req, res){
		const { leagueId } = req.params;
		const league = await League.findById(leagueId).populate('stages');
		res.send(league.stages)
	}

	async editLeague(req, res){
		try {
			await League.updateOne({_id: req.body.id}, {$set:
					{
						title: req.body.title,
						description: req.body.description,
						season: req.body.season
					}});
			res.send(`League with id: ${req.body._id} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteLeague(req, res){
		try {
			await League.deleteOne({_id: req.body.id});
			res.send(`League with id: ${req.body.id} was successfully removed`)
		} catch (e) {
			res.send(e)
		}
	}

}

module.exports = LeagueService;
