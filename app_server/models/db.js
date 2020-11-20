const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/Loc8r';
mongoose.set('useUnifiedTopology', true);

mongoose.connect(dbURI, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
    });

mongoose.connection.on('connected', () => {         // Monitors 4 a successful connection through mongoose 
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err); // checks 4 a connection error 
});
mongoose.connection.on('disconnected', () => {      // checks 4 a disconnection event
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {                
    mongoose.connection.close( () => {                         
        console.log(`Mongoose disconnected through ${msg}`);     
        callback();                                              
    });
};

// For nodemon restarts     
process.once('SIGUSR2', () => {                        
    gracefulShutdown('nodemon restart', () => {          
        process.kill(process.pid, 'SIGUSR2');              
    });
});
// For app termination     
process.on('SIGINT', () => {                           
    gracefulShutdown('app termination', () => {          
        process.exit(0);                                   
    });
});
// For Heroku app termination 
process.on('SIGTERM', () => {                          
    gracefulShutdown('Heroku app shutdown', () => {      
        process.exit(0);                                   
    });
});

require('./locations');