// simple object for storing data on a Note
class Note {
    constructor(title, text, id) {
        this.title = title;     // the title of the note
        this.text = text;       // the actual description of the note
        this.id = id;           // the unique ID of the note
    }
}

module.exports = Note;
