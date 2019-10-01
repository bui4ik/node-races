const Service = require('./user.service');
const {createNewUser, deleteUser, editUser, getAllUsers, getUserById, newUserRace, getAllUserRaces, deleteUserById} = new Service();

class UserController {
	getAllUsers(req, res){
		getAllUsers(res)
	};

	getUserById(req, res){
		getUserById(req, res)
	}

	getAllUserRaces(req, res){
		getAllUserRaces(req, res);

	}

	newUserRace(req, res){
		newUserRace(req, res)
	}

	postNewUser (req,res) {
		createNewUser(req, res)
	}

	editUser (req, res) {
		editUser(req, res);
	}

	deleteUser (req, res) {
		deleteUser(req, res)
	}

	deleteUserById(req, res){
		deleteUserById(req, res)
	}
}

module.exports = UserController;
