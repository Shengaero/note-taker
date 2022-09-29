const path = require('path');
const express = require('express');
const database = require('./src/database');
const routes = require('./routes');

const app = express();      // our express application
const PORT = 3001;          // port to run on

app.use(express.json());                                        // app should use JSON
app.use(express.urlencoded({ extended: true }));                // app should use extended URL encoding
app.use(express.static(path.join(process.cwd(), 'public')));    // app should use a static content directory /public
app.use(routes);                                                // app should use specific routes

// app opens on specified PORT
app.listen(PORT, () => {
    database.load();                                        // load the database
    console.log(`Application open on port: ${PORT}`);       // log that the application is live
});
