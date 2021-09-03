function helpFunction(){

    console.log(`List of commands : 
    1. node main.js tree <pathName>
    2. node main.js organise <pathName>
    3. node main.js help
    `);

}

module.exports = {
    helpFn : helpFunction
}