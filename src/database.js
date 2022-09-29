// const fs = require('fs');
// const path = require('path');
const Note = require('./Note');

const database = [];
// const databaseFilePath = path.join(process.cwd(), 'db', 'db.json');

// const stringifyDatabase = () => JSON.stringify(database) + '\n';

// function to add an entry to the database
function add(entry) {
    if(!(entry instanceof Note)) {                                                          // if the entry isn't an instance of the Note class
        throw new Error(`Entry was not instance of Note class: ${JSON.stringify(entry)}`);      // throw an error, this was not allowed
    }
    database.push(entry);                                                                   // push the entry into the database
    console.log(`New note entry added: ${JSON.stringify(entry)}`);                          // log that a new entry was added
}

// function to remove an entry in the database by it's ID
function remove(id) {
    let removeIndex = -1;                           // start with no index
    for(let i = 0; i < database.length; i++) {      // for each index
        if(database[i].id === id) {                     // if the id matches
            removeIndex = i;                                // set the remove index to this index
            break;                                          // break out of loop
        }
    }
    if(removeIndex >= 0) {                          // if we have an index to remove
        database.splice(removeIndex, 1);                // splice it out of the database
    }
}

// function to save the database to the database file
function save(onSuccess = null) {
    // fs.writeFile(databaseFilePath, stringifyDatabase(), { flag: 'w+' }, (err) => {      // write stringified JSON to the database file
    //     if(err) {                                                                           // if there's an error
    //         console.error(err);                                                                 // log it
    //     } else if(onSuccess !== null) {                                                     // otherwise, if we have on-success behavior to run
    //         onSuccess();                                                                        // run it
    //     }
    // });
}

// function to load the database file into the runtime
function load() {
    // if(!fs.existsSync(databaseFilePath)) {                                      // if the database file exists
    //     console.log('Database JSON does not exist, creating now...');               // log that it will be created
    //     save(() => console.log('Successfully created database file!'));             // create it and log when it's created
    // } else {                                                                    // else
    //     fs.readFile(databaseFilePath, (err, data) => {                              // it does exist, so read the content from it into the database
    //         if(err) {                                                                   // if there's an error
    //             console.error(err);                                                         // log it
    //         }
    //         let loadedDatabase = JSON.parse(data);                                      // parse the loaded database
    //         for(let entry of loadedDatabase) {                                          // for each entry of the loaded database
    //             let note = new Note(entry.title, entry.text, entry.id);                     // create a new Note object using the stored data
    //             database.push(note);                                                        // push it to the database
    //         }
    //         console.log(`Loaded database with ${loadedDatabase.length} entries!`);      // log that the database was loaded
    //     });
    // }
}

module.exports = {
    entries: database,
    add: add,
    remove: remove,
    save: save,
    load: load
};
