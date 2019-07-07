#! /usr/bin/node
//const util = require('./util');
const notes = require('./notes');
//const validator = require('validator');
const argparser = require('yargs');



argparser.command({
    command: 'add',
    describe: 'adds the node with given title and body to notes',
    builder:{
        title:{
            describe:"the title of node to be added",
            demandOption: true,
            type: "string"
        },
        body:{
            describe:"the body of the note to be added",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

argparser.command({
    command: 'remove',
    describe: 'removes the node with given title',
    builder:{
        title: {
            describe:"the title of note to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

argparser.command({
    command: 'read',
    describe: 'reads out the node with given title to the user in console',
    builder: {
        title:{
            describe: "the title of note to be displayed",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

argparser.command({
    command: 'list',
    describe: 'list all notes',
    handler(){
        notes.listNotes();
    }
});

argparser.parse();

/*  
// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk `{bold $util.name}`)


// Use RGB colors in terminal emulators that support it.
console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline.strikethrough.italic('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));
*/