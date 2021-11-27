const Discord = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: "ping",
    aliases: ["pong"],
    description: "Envia el pong actual del bot en milisegundos(ms)",
    onlycreator: false,
    args: false,
    usage: "",
    category: "Bot",
    permissions: "",
    cooldonw: 5,
    permissionsme: "",
    guildOnly: true,

  async execute(message, args, prefix, client, version) {

message.channel.send('Calculando ping ').then(m => {
setTimeout(() => {
m.edit("La API es de "+ Math.floor(client.ws.ping)+"ms ")
}, 1000)
})}}; 