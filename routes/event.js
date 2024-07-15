// routes/events.js
const router = require('express').Router();
let Event = require('../models/event.model');

// Get all events
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new event
router.route('/add').post((req, res) => {
  const { title, date, time, location, description, category } = req.body;

  const newEvent = new Event({
    title,
    date,
    time,
    location,
    description,
    category,
  });

  newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a specific event
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete an event
router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update an event
router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.title = req.body.title;
      event.date = Date.parse(req.body.date);
      event.time = req.body.time;
      event.location = req.body.location;
      event.description = req.body.description;
      event.category = req.body.category;

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;