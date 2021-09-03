let fs = require('fs');
let path = require('path');

function treeFunction(srcPath){

    let content = fs.readdirSync(srcPath);
    let base = path.basename(srcPath);

    console.log(base);

    for(let i of content){
        let fpath = path.join(srcPath,i);
        let statusObj = fs.lstatSync(fpath).isFile();
        // console.log(fpath, statusObj);
        if(statusObj) 
        console.log( "\n\t"+i);
        else {
            treeFunction(fpath);
        }
    }
   
}

module.exports = {
    treeFn : treeFunction
};