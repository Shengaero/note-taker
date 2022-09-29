const express = require('express');
const html = require('./html');
const apiNotes = require('./api/notes');

const app = express();

app.use(html);                      // app should use HTML routes
app.use('/api/notes', apiNotes);    // app should use API routes

module.exports = app;
