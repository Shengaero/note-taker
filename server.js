const path = require('path');
const express = require('express');
const database = require('./src/database');
const idgen = require('./src/idgen');
const Note = require('./src/Note');

const app = express();      // our express application
const PORT = 3001;          // port to run on
const apiBase = '/api';     // api base route

app.use(express.json());                                    // app should use JSON
app.use(express.static(path.join(__dirname, 'public')));    // app should use a static content directory /public

// GET /notes
app.get('/notes', (_, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));

// GET /api/notes
app.get(`${apiBase}/notes`, (_, res) => {
    return res.status(200).json(database.entries);      // send a 200 - OK and JSON of the database
});

// POST /api/notes
app.post(`${apiBase}/notes`, (req, res) => {
    let body = req.body;                                // get the request body
    if(body) {                                          // if the body is present
        if(body.title && body.text) {                       // if it has a title and text property
            let id = idgen();                                   // generate a unique ID
            let note = new Note(body.title, body.text, id);     // create a Note object
            database.add(note);                                 // add the Note to the database
            database.save();                                    // save the database
            return res.status(201);                             // send 201 - Created
        }
    }
    return res.status(400);                             // send 400 - Bad Request, there was no body content, or the body content didn't contain the necessary info
});

// DELETE /api/notes/:id
app.delete(`${apiBase}/notes/:id`, (req, res) => {
    let {id} = req.params;      // get the URL parameters
    database.remove(id);        // remove the ID from the database
    database.save();            // save the database
    return res.status(200);     // send 200 - OK
});

// app opens on specified PORT
app.listen(PORT, () => {
    database.load();                                        // load the database
    console.log(`Application open on port: ${PORT}`);       // log that the application is live
});
