const express = require("express");
const router = express.Router();
const LeagueController = require('./league.controller');
const leagueController = new LeagueController();

/**
 * @swagger
 * tags:
 * - name: Leagues
 *   description: Leagues connected with leagues data
 */

/**
 * @swagger
 * definitions:
 *   League:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         example: Test league
 *       description:
 *         type: string
 *         example: Test description
 *       season:
 *         type: string
 *         example: summer
 *   UserId:
 *     type: object
 *     properties:
 *       UserId:
 *         type: string
 *         example: 5d9d9941ac08b822b0114585
 */

function leagueRouter(){
	router.route('/')
		/**
		 * @swagger
		 * /leagues:
		 *  get:
		 *    tags: [Leagues]
		 *    summary: Get all leagues
		 *    description: Use to request all leagues
		 *    responses:
		 *      '200':
		 *        description: All leagues object
		 *      '404':
		 *        description: Returns error message
		 */
		.get(leagueController.getAllLeagues.bind(leagueController))
		/**
		 * @swagger
		 * /leagues:
		 *   post:
		 *     tags: [Leagues]
		 *     summary: Add a new league
		 *     parameters:
		 *       - in: body
		 *         newLeague: body
		 *         description: User object that needs to be added
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/League'
		 *     responses:
		 *       '200':
		 *         description: New league object
		 *       '404':
		 *         description: Returns error message
		 */
		.post(leagueController.createNewLeague.bind(leagueController));
	router.route('/:leagueId')
	/**
	 * @swagger
	 * /leagues/{leagueId}:
	 *   get:
	 *     tags: [Leagues]
	 *     summary: Find league by ID
	 *     parameters:
	 *       - name: leagueId
	 *         in: path
	 *         description: League Id to find
	 *         type: string
	 *         required: true
	 *     responses:
	 *       '200':
	 *         description: Returns this league object
	 *       '404':
	 *         description: Returns error message
	 */
		.get(leagueController.getLeagueById.bind(leagueController))
		/**
		 * @swagger
		 * /leagues/{leagueId}:
		 *   put:
		 *     tags: [Leagues]
		 *     summary: Edit league by id
		 *     parameters:
		 *       - name: leagueId
		 *         in: path
		 *         description: League Id to update
		 *         type: string
		 *         required: true
		 *       - in: body
		 *         name: body
		 *         description: New league parameters
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/League'
		 *     responses:
		 *       '200':
		 *         description: Updated league object
		 *       '404':
		 *         description: Returns error message
		 */
		.put(leagueController.editLeagueById.bind(leagueController))
		/**
		 * @swagger
		 * /leagues/{leagueId}:
		 *   delete:
		 *     tags: [Leagues]
		 *     summary: delete league by id
		 *     parameters:
		 *       - name: leagueId
		 *         in: path
		 *         description: League Id to delete
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Message with deleting confirmation
		 *       '404':
		 *         description: Returns error message
		 */
		.delete(leagueController.deleteLeagueById.bind(leagueController));
	router.route('/:leagueId/users')
		/**
		 * @swagger
		 * /leagues/{leagueId}/users:
		 *   put:
		 *     tags: [Leagues]
		 *     summary: Add user to league
		 *     parameters:
		 *       - name: leagueId
		 *         in: path
		 *         description: Leagues id to add user
		 *         type: string
		 *         required: true
		 *       - in: body
		 *         userId: string
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/UserId'
		 *     responses:
		 *       '200':
		 *         description: New stage object
		 *       '404':
		 *         description: Returns error message
		 */
		.put(leagueController.addUserToLeague.bind(leagueController));
	return router
}

module.exports = leagueRouter;
