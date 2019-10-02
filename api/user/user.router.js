const UsersController  = require('./user.controller');
const userController = new UsersController();

function userRouter(app){
	app.route('/users')
		.get(userController.getAllUsers.bind(userController))
		.post(userController.createNewUser.bind(userController));
	app.route('/users/:userId')
		.get(userController.getUserById.bind(userController))
		.put(userController.editUserById.bind(userController))
		.delete(userController.deleteUserById.bind(userController));
	app.route('/usersWithRaces')
		.get(userController.getAllUsersWithRaces.bind(userController));
	app.route('/usersWithLeagues')
		.get(userController.getAllUsersWithLeagues.bind(userController));
}

module.exports = userRouter;
