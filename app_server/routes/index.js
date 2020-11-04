const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');  // req's the location controller
const ctrlOthers = require('../controllers/others');        // req's the other controller

/* locations pages */
router.get('/', ctrlLocations.homelist);                      // defines location routes &
router.get('/location', ctrlLocations.locationInfo);          // maps them to ctrlr fns
router.get('/location/review/new', ctrlLocations.addReview);

/* other pages */
router.get('/about', ctrlOthers.about);                       // Defines 'other' routes

module.exports = router;
