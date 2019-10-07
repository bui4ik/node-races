const userRouter = require('./api/user/user.router')
const raceRouter = require('./api/race/race.router')
const stageRouter = require('./api/stage/stage.router')
const leagueRouter = require('./api/league/league.router')

function router(app) {
  userRouter(app)
  raceRouter(app)
  stageRouter(app)
  leagueRouter(app)
}

module.exports = router
