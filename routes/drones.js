const express = require('express');
const Drone = require('../models/Drone.model');


// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((allTheDronesFromDB) => {
    res.render('./drones/list', {drones: allTheDronesFromDB});
  });
});

router.get('/drones/create', (req, res) => {
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res) => {
  let {name, maxSpeed, propellers } = req.body;
  Drone.create({
    name: name,
    maxSpeed: maxSpeed,
    propellers: propellers,
  }).then(() => {
    res.redirect('/drones');
  });
});

router.post('/drones/:droneId/delete', (req, res) => {
  let droneId = req.params.droneId;
  let {name, maxSpeed, propellers } = req.body;
  Drone.findByIdAndDelete(droneId)
    .then(() => {
    res.redirect('/drones');
  });
  
});

router.get('/drones/:droneId/edit', (req, res) => {
  let droneId = req.params.droneId;
  Drone.findById(droneId)
  .then((theDroneFound) => {
    res.render('drones/update-form', { drone: theDroneFound});
  }).catch((err) => {
    res.render('error', { err });
  })
});

router.post('/drones/:droneId/edit', (req, res) => {
  let droneId = req.params.droneId;
  let {name, maxSpeed, propellers } = req.body;
  Drone.findByIdAndUpdate(droneId, {
    name,
    maxSpeed,
    propellers
  }).then(() => {
    res.redirect('/drones');
  });
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
