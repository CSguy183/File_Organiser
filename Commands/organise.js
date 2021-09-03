let fs=require('fs');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organiseFunction(srcPath){

    let fileArr = fs.readdirSync(srcPath);
    // console.log(fileArr);
    let organisedFolder = path.join(srcPath , "organisedFolder");
    if(!fs.existsSync(organisedFolder)) fs.mkdirSync(organisedFolder);

    for(let file of fileArr){
        let filePath = path.join('C:\\Users\\ashwi\\Desktop\\JavaScript Projects\\files', file);
        if(!fs.lstatSync(filePath).isFile()) continue;

        let type = checkType(file);

        let typeFolder = path.join(organisedFolder , type);
        if(!fs.existsSync(typeFolder)){
            fs.mkdirSync(typeFolder);
        }

        let src = path.join(srcPath, file);
        let dest = path.join(typeFolder,file);

        fs.copyFileSync(src, dest);
    }

};

function checkType(file){

    let ext = path.extname(file).substr(1);

    for(let [key, val] of Object.entries(types)){

        if(val.includes(ext)){
            return key;
        }

    }

    return 'other';
}

module.exports = {
    organiseFn : organiseFunction
}