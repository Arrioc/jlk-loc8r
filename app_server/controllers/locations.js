/* GET 'home' page */
const homelist = (req, res) => {                                 // creates a homelist function, defines the route
    res.render('locations-list', { title: 'Home' });             // includes controller code for the 'home' page
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {                            // creates a locationInfo function, defines the route
    res.render('location-info', { title: 'Location info' });    // includes controller code for the 'Location info' page
};

/* GET 'Add review' page */
const addReview = (req, res) => {                               // creates a addReview function, defines the route
    res.render('location-review-form', { title: 'Add review' });               // includes controller code for the 'add review' page
};

module.exports = {                                              // Exposes the functions as a method
    homelist,
    locationInfo,
    addReview
};