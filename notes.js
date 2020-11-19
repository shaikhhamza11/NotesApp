const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
//adding notes
const addNotes = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes);
        console.log(chalk.green.inverse('Note Added'))

    }
    else {
        console.log(chalk.red.inverse('Title Taken'))
    }

}
//loading notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        const data = JSON.parse(dataJson);
        return data
    }
    catch (e) {
        return []
    }
}
//saving notes
const savedNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);

}

//removeNotes
const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green("Notes Deleted"));
    }
    else {

        console.log(chalk.red("There is no such title present here"));

    }
    savedNotes(notesToKeep)

}
//listing notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.green('Your Notes'));
    notes.forEach((note) => {
        console.log(note)
    })
}
//reading a note

const readNotes = (title, body) => {
    const notes = loadNotes();
    console.log(notes)
    const notesToRead = notes.find((note) => note.title === title);
    if (notesToRead === undefined) {
        console.log("Note not found")
    }
    else {
 

        console.log(chalk.inverse.red(notesToRead.title))
        console.log((notesToRead.body))
    }
debugger

}



module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}