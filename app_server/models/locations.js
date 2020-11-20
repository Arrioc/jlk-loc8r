const mongoose = require('mongoose');                           // require mongoose to use mongoose methods

const openingTimeSchema = new mongoose.Schema({                 // defines schema for opening times
    days: { type: String, required: true },
    opening: String,
    closing: String,
    closed: { type: Boolean, required: true }
});

const reviewSchema = new mongoose.Schema({                      // defines schema for reviews
    author: String, 
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviewText: String,
    createdOn: { type: Date, 'default': Date.now }
});

const locationSchema = new mongoose.Schema({                    // starts main location schema definition
    name: { type: String, required: true },
    address: { type: String, required: true },
    rating: { type: Number, 'default': 0, min: 0, max: 5 }, 
    facilities: [String], 
    coords: { type: {type: String }, coordinates: [Number] },   // use 2dsphere to add support for GeoSON long, lat coord pairs
    openingTimes: [openingTimeSchema],                          // ref opening times schema to add nested subdocs
    reviews: [reviewSchema]                                     // ref reviews schema to add nested subdocs
 });
 locationSchema.index({coords: '2dsphere'});                    // definie path as having 2dsphere index
 mongoose.model('Location', locationSchema);                    // build/compile a mongoose model of my location schema

