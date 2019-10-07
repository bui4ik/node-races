const userRouter = require('./api/user/user.router');
const raceRouter = require('./api/race/race.router');
const stageRouter = require('./api/stage/stage.router');
const leagueRouter = require('./api/league/league.router');

function router(app) {
  app.use('/users', userRouter());
  app.use('/races', raceRouter());
  app.use('/stages', stageRouter());
  app.user('/leagues', leagueRouter());
}

module.exports = router;
