const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectID,
    required: true,
  },
  stageId: {
    type: Schema.Types.ObjectID,
    required: true,
  },
});

module.exports = mongoose.model('race', raceSchema);
