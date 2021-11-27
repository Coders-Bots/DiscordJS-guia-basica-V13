const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: "snipe",
    description: "Muestra Mensajes Borrados",
    userperm: [""],
    botperm: [""],
    owneronly: "false",
    type: 'CHAT_INPUT',
    options: [{
        name: "canal",
        description: "introduce el canal",
        type: "CHANNEL",
        required: false

    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
try{
  const channel = interaction.options.getChannel("canal") || interaction.channel;

  const msg = client.snipes.get(channel.id)
  if(!msg){
    interaction.reply({content: "No se ha borrado nada!", ephemeral: true});

  } else {
      let texto = msg.content || msg.attachment.name

    const embed = new Discord.MessageEmbed()

    .setAuthor(`Mensaje Borrado por ${msg.delete.tag}`, msg.delete.displayAvatarURL({dynamic: true, size : 1024 }))
    .setDescription("***:file_cabinet: » Mensaje:*** \n ```"  + texto + "```")
    .addField(":dividers: » Canal:", `\n<#${msg.canal.id}>`)
    .setColor("0xFCFBFB")
    .setTimestamp()
    interaction.reply({embeds: [embed]});
    if(msg.attachment) return interaction.channel.send({content: "Archivo:", files: [msg.attachment], ephemeral: false })

  }
  console.log(`SLASH\n Snipe por ${interaction.user.username} en el server ${interaction.guild.name}`)
} catch(e) { console.log(e)}        

    },
};
