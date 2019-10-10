const express = require("express");
const router = express.Router();
const RaceController = require('./race.controller');
const raceController = new RaceController();

/**
 * @swagger
 * tags:
 * - name: Races
 *   description: Requests connected with races data
 */

/**
 * @swagger
 * definitions:
 *   Race:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         example: Test race
 *       time:
 *         type: number
 *         example: Test description
 *       description:
 *         type: string
 *         example: Test description
 *       userId:
 *         type: string
 *         example: 5d9d9941ac08b822b0114585
 *       leagueId:
 *         type: string
 *         example: 5d9d9941ac08b822b0114585
 */

function raceRouter(){
	router.route('/')
		/**
		 * @swagger
		 * /races:
		 *  get:
		 *    tags: [Races]
		 *    summary: Get all race
		 *    description: Use to request all race
		 *    responses:
		 *      '200':
		 *        description: All stages object
		 *        schema:
		 *          type: array
		 *          items:
		 *            $ref: '#/definitions/Race'
		 *      '404':
		 *        description: Returns error message
		 */
		.get(raceController.getAllRaces.bind(raceController))
	router.route('/:stageId')
		/**
		 * @swagger
		 * /races:
		 *   post:
		 *     tags: [Races]
		 *     summary: Add a new race
		 *     parameters:
		 *       - in: body
		 *         title: title
		 *         time: number
		 *         description: test desc
		 *         userId: string
		 *         stageId: string
		 *         required: true
		 *         schema:
		 *           $ref: '#/definitions/Race'
		 *     responses:
		 *       '200':
		 *         description: New race object
		 *       '404':
		 *         description: Returns error message
		 */
		.post(raceController.createNewRace.bind(raceController));
	router.route('/:raceId')
		/**
		 * @swagger
		 * /races/{raceId}:
		 *   get:
		 *     tags: [Races]
		 *     summary: Find race by ID
		 *     parameters:
		 *       - name: raceId
		 *         in: path
		 *         description: Race Id to find
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Returns this race object
		 *       '404':
		 *         description: Returns error message
		 */
		.get(raceController.getRaceById.bind(raceController))
		/**
		 * @swagger
		 * /race/{raceId}:
		 *   put:
		 *     tags: [Races]
		 *     summary: Edit race by id
		 *     parameters:
		 *       - name: raceId
		 *         in: path
		 *         description: Race Id to update
		 *         type: string
		 *         required: true
		 *       - in: body
		 *         title: title
		 *         time: number
		 *         description: test desc
		 *         userId: string
		 *         stageId: string
		 *         required: true
		 *         schema:
		 *           $ref: '#/definitions/Race'
		 *     responses:
		 *       '200':
		 *         description: Updated race object
		 *       '404':
		 *         description: Returns error message
		 */
		.put(raceController.editRaceById.bind(raceController))
		/**
		 * @swagger
		 * /races/{raceId}:
		 *   delete:
		 *     tags: [Races]
		 *     summary: delete races by id
		 *     parameters:
		 *       - name: raceId
		 *         in: path
		 *         description: Race Id to delete
		 *         type: string
		 *         required: true
		 *     responses:
		 *       '200':
		 *         description: Message with deleting confirmation
		 *       '404':
		 *         description: Returns error message
		 */
		.delete(raceController.deleteRaceById.bind(raceController));
	router.route('/racesWithStagesBySeason/:season')
		/**
		 * @swagger
		 * /racesWithStagesBySeason/{season}:
		 *  get:
		 *    tags: [Races]
		 *    summary: Get all races with stages by season
		 *    description: Use to request all races with stages by season
		 *    responses:
		 *      '200':
		 *        description: All with stages by season object
		 *      '404':
		 *        description: Returns error message
		 */
		.get(raceController.racesWithStagesBySeason.bind(raceController));
	return router
}

module.exports = raceRouter;
