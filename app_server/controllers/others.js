/* GET about page */
const about = (req, res) => {                   // creates an about function, defines the route
    res.render('generic-text', { title: 'About' });    // includes controller code for the about page
};
module.exports = {      // Exposes the about function as a method
    about
};