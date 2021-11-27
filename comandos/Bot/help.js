const Discord = require("discord.js");
const { MessageEmbed, Collection, Guild } = require('discord.js');
const fs = require("fs")

const cls = ((x)=>console.log(x))

module.exports = {
    name:"eval",
    aliases:["e"],
    description: "NULL", 
    args: false,
    category: "Configuarion del creador",
    permissions:"",
    permissionsme: ["SEND_MESSAGES","VIEW_CHANNEL"],
    cooldonw: 5, 
    onlycreator: true, 
    
async execute(message, args, prefix, client){ 
 
    let embed = new Discord.MessageEmbed()
    .setAuthor("")

}
}