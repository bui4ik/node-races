const express = require("express");
const router = express.Router();
const StageController = require('./stage.controller');
const stageController = new StageController();

/**
 * @swagger
 * tags:
 * - name: Stages
 *   description: Requests connected with stages data
 */

/**
 * @swagger
 * definitions:
 *   Stage:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         example: Test stage
 *       description:
 *         type: string
 *         example: Test description
 *       geolocation:
 *         type: array
 *         example: [66, 77]
 *       leagueId:
 *         type: string
 *         example: 5d9d9941ac08b822b0114585
 *   LeagueId:
 *     type: object
 *     properties:
 *       leagueId:
 *         type: string
 *         example: 5d9d9941ac08b822b0114585
 */

function stageRouter(){
	router.route('/')
		/**
		 * @swagger
		 * /stages:
		 *  get:
		 *    tags: [Stages]
		 *    summary: Get all stages
		 *    description: Use to request all stages
		 *    responses:
		 *      '200':
		 *        description: All stages object
		 *      '404':
		 *        description: Returns error message
		 */
		.get(stageController.getAllStages.bind(stageController))
		/**
		 * @swagger
		 * /stages:
		 *   post:
		 *     tags: [Stages]
		 *     summary: Add a new stage
		 *     parameters:
		 *       - in: body
		 *         title: body
		 *         description: User object that needs to be added
		 *         geolocation: Array for geolocation
		 *         leagueId: string
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/Stage'
		 *     responses:
		 *       '200':
		 *         description: New stage object
		 *       '404':
		 *         description: Returns error message
		 */
		.post(stageController.createNewStage.bind(stageController));
	router.route('/:stageId')
		/**
		 * @swagger
		 * /stages/{stageId}:
		 *   get:
		 *     tags: [Stages]
		 *     summary: Find user by ID
		 *     parameters:
		 *       - name: stageId
		 *         in: path
		 *         description: Stage Id to find
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Returns this stage object
		 *       '404':
		 *         description: Returns error message
		 */
		.get(stageController.getStageById.bind(stageController))
		/**
		 * @swagger
		 * /stages/{stageId}:
		 *   put:
		 *     tags: [Stages]
		 *     summary: Edit stage by id
		 *     parameters:
		 *       - name: stageId
		 *         in: path
		 *         description: Stage Id to update
		 *         type: string
		 *         required: true
		 *       - in: body
		 *         title: body
		 *         description: New title parameters
		 *         geolocation: Array for geolocation
		 *         leagueId: string
		 *         required: true
		 *         schema:
		 *           $ref: '#definitions/Stage'
		 *     responses:
		 *       '200':
		 *         description: New stage object
		 *       '404':
		 *         description: Returns error message
		 */
		.put(stageController.editStageById.bind(stageController))
		/**
		 * @swagger
		 * /stages/{stageId}:
		 *   delete:
		 *     tags: [Stages]
		 *     summary: delete stage by id
		 *     parameters:
		 *       - name: stageId
		 *         in: path
		 *         description: Stage Id to delete
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Message with deleting confirmation
		 *       '404':
		 *         description: Returns error message
		 */
		.delete(stageController.deleteStageById.bind(stageController));
	router.route('/:stageId/league')
	/**
	 * @swagger
	 * /stages/{stageId}/league:
	 *   put:
	 *     tags: [Stages]
	 *     summary: Edit stage by id
	 *     parameters:
	 *       - name: stageId
	 *         in: path
	 *         description: Add leagues to stage
	 *         type: string
	 *         required: true
	 *       - in: body
	 *         leagueId: string
	 *         required: true
	 *         schema:
	 *           $ref: '#definitions/LeagueId'
	 *     responses:
	 *       '200':
	 *         description: New stage object
	 *       '404':
	 *         description: Returns error message
	 */
		.post(stageController.addLeagueToStage.bind(stageController));
	return router
}

module.exports = stageRouter;
