// models/event.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String },
  location: { type: String },
  description: { type: String },
  category: { type: String },
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;