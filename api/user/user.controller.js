const Service = require('./user.service');
const {createNewUser, editUserById, getAllUsers, getUserById, deleteUserById, getAllUsersWithRaces, getAllUsersWithLeagues} = new Service();

class UserController {
	getAllUsers(req, res){
		getAllUsers(res)
	};

	getUserById(req, res){
		getUserById(req, res)
	}

	createNewUser (req,res) {
		createNewUser(req, res)
	}

	editUserById(req, res) {
		editUserById(req, res);
	}

	deleteUserById(req, res){
		deleteUserById(req, res)
	}

	getAllUsersWithRaces(req, res){
		getAllUsersWithRaces(req, res)
	}

	getAllUsersWithLeagues(req, res){
		getAllUsersWithLeagues(req, res)
	}
}

module.exports = UserController;
