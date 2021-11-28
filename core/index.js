let { slash } = require("./slash")
let { cmds } = require("./commands")
let { events } = require("./events")

function all(client) {
    if (!client && !client.user) {
        console.error("error => all es una funcion que recibe el parametro de Cliente o  Bot")
        process.exit()
    }else{
    slash(client)
    cmds(client)
    events(client)
    }
}
module.exports.all = all

module.exports.slash = slash
module.exports.commands = cmds
module.exports.events = events