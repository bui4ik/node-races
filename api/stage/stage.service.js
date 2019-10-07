const Stage = require('./stage.schema')
const Race = require('../race/race.schema')

class StageService {
  async getAllStages() {
    return Stage.find({})
  }

  async getStageById(stageId) {
    return Stage.findById(stageId)
  }

  async createNewStage(newStageProps) {
    let newStage = new Stage(newStageProps)
    newStage.save()
    return newStage
  }

  async editStageById(stageId, newProps) {
    await Stage.updateOne(
      { _id: stageId },
      {
        $set: {
          title: newProps.title,
          description: newProps.description,
          geolocation: newProps.geolocation,
        },
      },
    )
    return await Stage.findById(stageId)
  }

  async deleteStageById(stageId) {
    await Race.deleteMany({ stageId: stageId })
    await Stage.deleteOne({ _id: stageId })
    return `Stage with id: ${stageId} was successfully removed`
  }

  async addLeagueToStage(stageId, leagueId) {
    const stage = await Stage.findById(stageId)
    stage.league = leagueId
    await stage.save()
    return stage
  }
}

module.exports = StageService
