const moment = require("moment")
const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: "botinfo",
    description: "Muestra Informacion Del Bot :D",
    userperm: [""],
    botperm: [""],
    owneronly: "false",

     run: async (client, interaction, args) => {
      try{

const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
let slash = client.slashCommands.map(x => x.length).length
let cmds = client.commands1.map(x => x.length).length

const embed = new Discord.MessageEmbed()
  //Crea un embed

  interaction.reply({embeds: [embed], ephemeral: false});

      } catch(e) { console.log(e)}        
    },
};

// comando aportado por @IJust 💍ª#0001