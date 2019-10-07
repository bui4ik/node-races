const express = require('express');
const router = express.Router();
const UsersController  = require('./user.controller');
const userController = new UsersController();

function userRouter(){
	router.route('/')
		.get(userController.getAllUsers.bind(userController))
		.post(userController.createNewUser.bind(userController))
	router.route('/:userId')
		.get(userController.getUserById.bind(userController))
		.put(userController.editUserById.bind(userController))
		.delete(userController.deleteUserById.bind(userController));
	router.route('/byRaces')
		.get(userController.getAllUsersWithRaces.bind(userController));
	router.route('/usersWithLeagues')
		.get(userController.getAllUsersWithLeagues.bind(userController));
	return router
}

// function userRouter(app){
// 	app.route('/users')
// 		.get(userController.getAllUsers.bind(userController))
// 		.post(userController.createNewUser.bind(userController));
// 	app.route('/users/:userId')
// 		.get(userController.getUserById.bind(userController))
// 		.put(userController.editUserById.bind(userController))
// 		.delete(userController.deleteUserById.bind(userController));
// 	app.route('/users/byRaces')
// 		.get(userController.getAllUsersWithRaces.bind(userController));
// 	app.route('/usersWithLeagues')
// 		.get(userController.getAllUsersWithLeagues.bind(userController));
// 	app.use('/users', router)
// }

module.exports = userRouter;
