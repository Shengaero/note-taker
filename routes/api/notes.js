const router = require('express').Router();
const database = require('../../src/database');
const idgen = require('../../src/idgen');
const Note = require('../../src/Note');

// GET /api/notes
router.get('/', (_, res) => {
    return res.status(200).json(database.entries);      // send a 200 - OK and JSON of the database
});

// POST /api/notes
router.post('/', (req, res) => {
    let body = req.body;                            // get the request body
    if(body) {                                      // if the body is present
        let { title, text } = body;                 // deconstruct body into title and text
        if(title && text) {                         // if it has a title and text property
            let id = idgen();                           // generate a unique ID
            let note = new Note(title, text, id);       // create a Note object
            database.add(note);                         // add the Note to the database
            database.save();                            // save the database
            res.sendStatus(201);                        // send 201 - Created
            return;                                     // return
        }
    }
    res.sendStatus(400);                            // send 400 - Bad Request, there was no body content, or the body content didn't contain the necessary info
});

// DELETE /api/notes/:id
router.delete('/:id', (req, res) => {
    let { id } = req.params;    // get the URL parameters
    database.remove(id);        // remove the ID from the database
    database.save();            // save the database
    res.sendStatus(204);        // send 204 - No Content
});

module.exports = router;
