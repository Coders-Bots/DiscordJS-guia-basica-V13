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

function slash_core(client) {
    if (!client && !client.user) {
        console.error("error => slash es una funcion que recibe el parametro de Cliente o  Bot")
        process.exit()
    }else{
    slash(client)
    }
}
function cmds_core(client) {
    if (!client && !client.user) {
        console.error("error => commands es una funcion que recibe el parametro de Cliente o  Bot")
        process.exit()
    }else{
    cmds(client)
    }
}
function events_core(client) {
    if (!client && !client.user) {
        console.error("error => events es una funcion que recibe el parametro de Cliente o  Bot")
        process.exit()
    }else{
    events(client)
    }
}
module.exports.all = all
module.exports.slash = slash_core
module.exports.commands = cmds_core
module.exports.events = events_core