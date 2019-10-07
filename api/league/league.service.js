const League = require('./league.schema')
const User = require('../user/user.schema')
const Stage = require('../stage/stage.schema')
const Race = require('../race/race.schema')

class LeagueService {
  getAllLeagues() {
    return League.find({})
  }

  async getLeagueById(leagueId) {
    return await League.findById(leagueId)
  }

  async createNewLeague(newLeagueProps) {
    let newLeague = new League(newLeagueProps)
    await newLeague.save()
    return newLeague
  }

  async editLeagueById(leagueId, newProps) {
    await League.updateOne(
      { _id: leagueId },
      {
        $set: {
          title: newProps.title,
          description: newProps.description,
          season: newProps.season,
        },
      },
    )
    return `League with id: ${leagueId} was successfully updated`
  }

  async deleteLeagueById(leagueId) {
    const stages = await Stage.find({ leagueId: leagueId })
    const stagesId = stages.map(stage => stage.id)
    for (let i = 0; i <= stagesId.length; i++) {
      await Race.deleteMany({ stageId: stagesId[i] })
    }
    await Stage.deleteMany({ leagueId: leagueId })
    await League.deleteOne({ _id: leagueId })
    return `League with id: ${leagueId} was successfully removed`
  }

  async addUserToLeague(leagueId, userId) {
    const league = await League.findById(leagueId)
    const user = await User.findById(userId)
    if (league.users.includes(userId)) {
      throw new Error('This user already in this league')
    }
    league.users.push(user._id)
    await league.save()
    return league
  }
}

module.exports = LeagueService
