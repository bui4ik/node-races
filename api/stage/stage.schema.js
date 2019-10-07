const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stageSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  geolocation: { type: [Number], required: true },
  leagueId: { type: Schema.Types.ObjectID, required: true },
})

module.exports = mongoose.model('stage', stageSchema)
