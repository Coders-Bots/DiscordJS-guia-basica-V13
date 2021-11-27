const moment = require("moment")
const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: "botinfo",
    description: "Muestra Informacion Del Bot :D",
    userperm: [""],
    botperm: [""],
    owneronly: "false",
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
     run: async (client, interaction, args) => {
      try{

console.log(`SLASH\n Botinfo por ${interaction.user.username} en el server ${interaction.guild.name}`)

const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
let slash = client.slashCommands.map(x => x.length).length
let cmds = client.commands1.map(x => x.length).length

const embed = new Discord.MessageEmbed()
  .setTitle("Kazuya | 2021®")
  .setDescription("[Pagina Web 💓](https://kazuyahey.weebly.com)")
  .addField(`Owners`, `\n <@695684619088953405>, <@798272487535411230>`,true)
  .addField(`El Nombre Fue Gracias A`, `\n <@869596809247469619>`,true)
  .addField(`Creacion`, `\n  22/03/2021`,true)
  .addField(`Servidores`, '\n ' + client.guilds.cache.size + ' Servidores ✨',true)
  .addField(`*Canales*`, `${client.channels.cache.size}`, true)
  .addField("*Usuarios*", ` ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,true)
  .addField("*Tiempo activo*", ` ${actividad}`,true)
  .addField("*Comandos Normales*", ` ${cmds}`,true)
  .addField("*Slash*", ` ${slash}`,true)
  .addField("**Memoría ocupada**", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,true)
  .addField(`**Libreria**`, `Discord.js ^${Discord.version}`, true)
  .addField(`**Lenguaje**`, `JavaScript`, true)
  .addField(`**Ultima Actualizacion**`, `\n Hace ${actividad}`,true)
  .addField(`**Informacion De La Actualizacion**`, '\n Se Ha Cambiado El Bot A Discord v13 \n Se Han Añadido Slash \n Nuevos Comandos',true)
  .setColor("RANDOM")
  .setImage("https://cdn.discordapp.com/attachments/775053583527051276/826311153733992468/announcements.gif")
  .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
  .setTimestamp() 
  .setFooter('Actualmente estoy en '+client.guilds.cache.size +" Servidores 💝 | Kazuya®")
  interaction.reply({embeds: [embed], ephemeral: false});

      } catch(e) { console.log(e)}        
    },
};