const UsersController  = require('./user.controller');
const express = require("express");
const userController = new UsersController();
const router = express.Router();

function userRouter(app){
	app.route('/users')
		.get(userController.getAllUsers.bind(userController))
		.post(userController.createNewUser.bind(userController));
	app.route('/users/:userId')
		.get(userController.getUserById.bind(userController))
		.put(userController.editUserById.bind(userController))
		.delete(userController.deleteUserById.bind(userController));
	app.route('/users/byRaces')
		.get(userController.getAllUsersWithRaces.bind(userController));
	app.route('/usersWithLeagues')
		.get(userController.getAllUsersWithLeagues.bind(userController));
	app.use('/users', router)
}

module.exports = userRouter;
