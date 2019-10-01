const User = require('./user.schema');
const Race = require('../race/race.schema');

class UserService {
	async getAllUsers(res){
		try {
			res.send(await User.find({}))
		} catch (e) {
			res.send(e)
		}
	}

	async getUserById(req, res){
		const { userId } = req.params;
		const user = await User.findById(userId);
		res.send(user)
	}

	async getAllUserRaces(req, res){
		const { userId } = req.params;
		const user = await User.findById(userId).populate('races');
		res.send(user.races)
	}

	async newUserRace(req, res){
		const { userId } = req.params;
		const newRace = new Race(req.body);
		const user = await User.findById(userId);
		newRace.user = user;
		await newRace.save();
		user.races.push(newRace);
		await user.save();
		res.send(newRace)
	}

	async createNewUser(req, res){
		let newUser = new User({
			name: req.body.name,
			surname: req.body.surname,
			username: req.body.username
		});
		try {
			await newUser.save();
			res.send(newUser)
		} catch (e) {
			res.send(e)
		}
	}

	async editUser(req, res){
		try {
			await User.updateOne({_id: req.body.id}, {$set:
					{
						name:req.body.name,
						surname:req.body.surname,
						username: req.body.username
					}});
			res.send(`User with id: ${req.body.id} was successfully updated`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteUser(req, res){
		try {
			await User.deleteOne({_id: req.body.id});
			res.send(`User with id: ${req.body.id} was successfully removed`)
		} catch (e) {
			res.send(e)
		}
	}

	async deleteUserById(req, res){
		const { userId } = req.params;
		const user = await User.findById(userId);
		if (!user){
			return res.status(404).send('User with such id does not exist');
		}
		await User.deleteOne({_id: userId});
		res.send(`User with id: ${userId} was successfully removed`)
	}

}

module.exports = UserService;
