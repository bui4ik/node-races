const Race = require('./race.schema');
const Stage = require('../stage/stage.schema');
const League = require('../league/league.schema');

class RaceService {
  getAllRaces() {
    return Race.find({});
  }

  getRaceById(raceId) {
    return Race.findById(raceId);
  }

  async createNewRace(newProps) {
    const { userId, stageId } = newProps;
    const stage = await Stage.findById(stageId);
    const league = await League.findById(stage.leagueId);
    if (!league.users.includes(userId)) {
      throw new Error('User not in this league');
    } else if (league.users.includes(userId)) {
      let newRace = new Race(newProps);
      await newRace.save();
      return newRace;
    }
  }

  async editRaceById(raceId, newProps) {
    await Race.updateOne(
      { _id: raceId },
      {
        $set: {
          title: newProps.title,
          time: newProps.time,
          description: newProps.description,
        },
      },
    );
    return await Race.findById(raceId);
  }

  async deleteRaceById(raceId) {
    await Race.deleteOne({ _id: raceId });
    return `Race with id: ${raceId} was successfully removed`;
  }

  async racesWithStagesBySeason(season) {
    return await League.aggregate([
      {
        $match: {
          season,
        },
      },
      {
        $lookup: {
          from: 'stages',
          localField: '_id',
          foreignField: 'leagueId',
          as: 'stages',
        },
      },
      { $project: { stages: 1, _id: 0 } },
      {
        $unwind: {
          path: '$stages',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'races',
          localField: 'stages._id',
          foreignField: 'stageId',
          as: 'stages.races',
        },
      },
    ]);
  }
}

module.exports = RaceService;
