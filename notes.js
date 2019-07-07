const fs = require('fs');
const chalk = require('chalk');

let db = 'notes.json';

const listNotes = () => {
    loadNotes().forEach(
        x => console.log(chalk`{bold.red Title}\t: ${x.title}\n{bold.green body}\t: ${x.body}\n`)
    );
};

const addNote = (title, body) =>{
    let notes = loadNotes();

    let matched = notes.filter(note => note.title === title);
    debugger;
    if(matched.length === 0){
        notes.push({
            title:title,
            body:body
        });

        saveNotes(notes);
    }else{
        console.log("there is already a note with the given title");
    }
};

const removeNote = function(title){
    let flag = false, notes = loadNotes().filter(note => {
        if (note.title === title){
            flag = true;
            return false;
        }
        else return true;
    });
    if(flag) {
        saveNotes(notes);
        console.log("note successfully removed")
    }else console.log("a note with given title doesn't exist");
};

const readNote = title => {
    let note = loadNotes().find(note => note.title === title);
    if (note) console.log(chalk`{bold.red Title}\t: ${note.title}\n{bold.green body}\t: ${note.body}\n`);
    else console.log(chalk`{bold.red.inverse No noe with given title}`);

};

const loadNotes = () => {
    return JSON.parse(fs.readFileSync(db).toString());
};

const saveNotes = notes => {
    fs.writeFileSync(db, JSON.stringify(notes));
};

module.exports = {
    listNotes,
    addNote,
    removeNote,
    readNote
};