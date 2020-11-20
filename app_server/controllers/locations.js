/* GET 'home' page */
const homelist = (req, res) => {                                 // creates a homelist function, defines the route
    res.render('locations-list', {                               // includes controller code for the 'home' page
        title: 'Loc8r - find a place to work with wifi', 
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{                                         
            name: 'Mos Eisley Cantina',
            address: '1st Villain Blvd. Star City, MI. RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Brawls', 'Premium wifi'],
            distance: '100m'
          },{
            name: 'Huxley\'s Books',
            address: '560 Huxley St, Reading Rd. Traverse City, MI.',
            rating: 5,
            facilities: ['Hot drinks', 'Great Books', 'Premium wifi'],
            distance: '110m'
          },{
            name: 'McRonalds',
            address: '1202 Creepy Clown Ave. Traverse City, MI.',
            rating: 2,
            facilities: ['Hot drinks', 'Food', 'Premium wifi', 'Kid watchers'],
            distance: '200m'
          },{
            name: 'Cupperz Cafe',
            address: '77 Hard Yupperz St. Traverse City, MI.',
            rating: 4,
            facilities: ['Hot drinks', 'Booze', 'Squirrely Dans', 'Let that marinate', 'Hard Yup', 'Premium wifi'],
            distance: '250m'  
          }]        
    });             
};

const locationInfo = (req, res) => {
  res.render('location-info',
    {
      title: 'Mos Eisley Cantina',
       pageHeader: {
        title: 'Mos Eisley Cantina',
      },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'Mos Eisley Cantina',
        address: '1st Villain Blvd. Star City, MI. RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Brawls', 'Premium wifi'],
        coords: {lng: -85.632625, lat: 44.716848},  
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great place! I didn\'t get to taste my coffee, a man landed on it- but what a fun atmosphere!'
          },
          {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }
        ]
      }
    }
  );
};

const addReview = (req, res) => {
  res.render('location-review-form',
    {
      title: 'Review Mos Eisley Cantina on Loc8r' ,
      pageHeader: { title: 'Mos Eisley Cantina' },
    }
  );
};

module.exports = {                                              // Exposes the functions as a method
    homelist,
    locationInfo,
    addReview
};