#! /usr/bin/env node

var Command = require('commander').Command;
var colors = require('colors');
var package = require('./package.json');

function start () {
    var program = new Command('validate_filename');
    program.version(package.version)
        .description(package.description)
        .usage('<options> <file ...>')
        .option('-e, --pattern <pattern>', 'a string that specifies the pattern of the regular expression')
        .option('-m, --message <message>', 'output errors when invalid')
        .parse(process.argv);

    if(!(program.pattern && program.message && program.args.length)) {
        return program.help();
    }
    
    var valid = true;

    program.args.forEach(function(filepath) {
        var ret = (new RegExp(program.pattern)).test(filepath);
        if(!ret) {
            valid = false;
            console.error(colors.red(filepath));
        }
    });

    if(!valid) {
        console.error(colors.yellow(program.message));
        process.exit(1);
    }
}

start();