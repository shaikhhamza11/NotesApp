const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')


// console.log(chalk.red("happy"));

yargs.command({
    command: "add",
    describe: "Adding a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }, body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)

    }
})
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }

    },
    handler: (argv) => {
        notes.removeNotes(argv.title)

    }
})
yargs.command({
    command: "list",
    describe: "listing a note",

    handler: () => {
        notes.listNotes()

    }
})
yargs.command({
    command: "read",
    describe: "Reading a note",

    handler: (argv) => {
        notes.readNotes(argv.title, argv.body);


    }
})

yargs.parse();