let helpObj = require('./Commands/help');
let treeObj = require('./Commands/tree');
let organiseObj = require('./Commands/organise');

let inpArr = process.argv.slice(2);
let command = inpArr[0];
let path = inpArr[1];

switch(command){
    case "help" : 
        helpObj.helpFn();
        break;
    case "tree" : 
        treeObj.treeFn(path);
        break;
    case "organise" : 
        organiseObj.organiseFn(path);
        break;
    default : 
        console.log("Invalid Command");
};