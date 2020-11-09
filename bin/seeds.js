// Iteration #1
// bin/seeds.js
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model.js');
const DB_NAME = 'express-drones-dev';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Array
const drones = [
    {
      name: 'Tony Dort',
      propellers:
        36,
      maxSpeed: 2,
    },
    {
      name: 'fast boi',
      propellers:
            4,
      maxSpeed: 80,
    },
    {
      name: 'meatloaf',
      propellers:
              18,
      maxSpeed: 10,
    }
];

Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));