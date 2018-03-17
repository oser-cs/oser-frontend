/*
Lightweight Express production server.
*/

// Create an Express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
// (Heroku gives the app a port through the $PORT environment variable)
// Use port 4200 by default
const port = process.env.PORT || 4200
app.listen(port);
console.log(`Server listening on port ${port}`);
