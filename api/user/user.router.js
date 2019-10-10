const express = require('express');
const router = express.Router();
const UsersController  = require('./user.controller');
const userController = new UsersController();

/**
 * @swagger
 * tags:
 * - name: Users
 *   description: Requests connected with users data
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         example: Ivan
 *       surname:
 *         type: string
 *         example: Ivanov
 *       username:
 *         type: string
 *         example: vanya777
 */

function userRouter(){
	router.route('/')
		/**
		 * @swagger
		 * /users:
		 *  get:
		 *    tags: [Users]
		 *    summary: Get all users
		 *    description: Use to request all users
		 *    responses:
		 *      '200':
		 *        description: All users object
		 *      '404':
		 *        description: Returns error message
		 */
		.get(userController.getAllUsers.bind(userController))
		/**
		 * @swagger
		 * /users:
		 *   post:
		 *     tags: [Users]
		 *     summary: Add a new user
		 *     parameters:
		 *       - in: body
		 *         name: body
		 *         description: User object that needs to be added
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/User'
		 *     responses:
		 *       '200':
		 *         description: New user object
		 *       '404':
		 *         description: Returns error message
		 */
		.post(userController.createNewUser.bind(userController))
	router.route('/byRaces')
		/**
		 * @swagger
		 * /users/byRaces:
		 *  get:
		 *    tags: [Users]
		 *    summary: Get all users with races
		 *    description: Use to request all users with races
		 *    responses:
		 *      '200':
		 *        description: All users with races object
		 *      '404':
		 *        description: Error message
		 */
		.get(userController.getAllUsersWithRaces.bind(userController))
	router.route('/withLeagues')
		/**
		 * @swagger
		 * /users/withLeagues:
		 *  get:
		 *    tags: [Users]
		 *    summary: Get all users with leagues
		 *    description: Use to request all users with leagues
		 *    responses:
		 *      '200':
		 *        description: All users with leagues object
		 *      '404':
		 *        description: Error message
		 */
		.get(userController.getAllUsersWithLeagues.bind(userController))
	router.route('/:userId')
		/**
		 * @swagger
		 * /users/{userId}:
		 *   get:
		 *     tags: [Users]
		 *     summary: Find user by ID
		 *     parameters:
		 *       - name: userId
		 *         in: path
		 *         description: User Id to find
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Returns this user object
		 *       '404':
		 *         description: Returns error message
		 */
		.get(userController.getUserById.bind(userController))
		/**
		 * @swagger
		 * /users/{userId}:
		 *   put:
		 *     tags: [Users]
		 *     summary: Edit user by id
		 *     parameters:
		 *       - name: userId
		 *         in: path
		 *         description: User Id to find
		 *         type: string
		 *         required: true
		 *       - in: body
		 *         name: body
		 *         description: New user parameters
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/User'
		 *     responses:
		 *       '200':
		 *         description: New user object
		 *       '404':
		 *         description: Returns error message
		 */
		.put(userController.editUserById.bind(userController))
		/**
		 * @swagger
		 * /users/{userId}:
		 *   delete:
		 *     tags: [Users]
		 *     summary: delete user by id
		 *     parameters:
		 *       - name: userId
		 *         in: path
		 *         description: User Id to delete
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Message with deleting confirmation
		 *       '404':
		 *         description: Returns error message
		 */
		.delete(userController.deleteUserById.bind(userController))
	return router
}

module.exports = userRouter;
