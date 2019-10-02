const User = require('./user.schema');
const Races = require('../race/race.schema');
const getFullCollection = require('../utils/getFullCollection');
const getElementById = require('../utils/getElementById');
const saveNewElement = require('../utils/saveNewElement');

class UserService {
	getAllUsers(res){
		getFullCollection(res, User)
	}

	getUserById(req, res) {
		const {userId} = req.params;
		getElementById(res, User, userId)
	}

	createNewUser(req, res){
		let newUser = new User(req.body);
		saveNewElement(res, newUser)
	}

	async editUserById(req, res){
		const { userId } = req.params;
		try {
			await User.updateOne({_id: userId}, {$set:
					{
						name:req.body.name,
						surname:req.body.surname,
						username: req.body.username
					}});
			res.send(await User.findById(userId))
		} catch (e) {
			res.status(400).send(e)
		}
	}

	async deleteUserById(req, res){
		const { userId } = req.params;
		try {
			const races = await Races.find({});
			if (!races) {
				await User.deleteOne({_id: userId});
			} else {
				await Races.deleteMany({userId: userId});
				await User.deleteOne({_id: userId});
			}
			res.send(`User with id: ${userId} was successfully removed`)
		} catch (e) {
			res.status(404).send(`No user with such id`)
		}
	}

	async getAllUsersWithRaces(req, res){
		const result = await User.aggregate([{
			$lookup: {
				from: 'races',
				localField: '_id',
				foreignField: 'userId',
				as: 'races'
			}
		}]);
		res.send(result);
	}

	async getAllUsersWithLeagues(req, res){
		// const userId = "5d938ec8b17e522018e327db";
		try {
			let result = await User.aggregate([
				{
					$lookup: {
						from: 'leagues',
						localField: '_id',
						foreignField: 'users',
						as: 'leagues'
					}
				}]);
			// const user = result.filter( e => e._id.toString() === userId);
			// console.log(user);
			res.send(result);
		} catch (e) {
			res.status(404).send(e.message)
		}
	}

}



module.exports = UserService;
