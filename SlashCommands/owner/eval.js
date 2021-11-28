const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');
const { inspect } = require('util')

module.exports = {
    name: "eval",
    description: "Este Comando Solo Es Para El Owner 😋😝😈",
    userperm: [""],
    botperm: [""],
    owneronly: "true",
    type: 'CHAT_INPUT',
        options: [
      {
        name: "code",
        description: "Codigo",
        type: "STRING", // aca el tipo en este caso 6 porque se necesita mencionar un usuario
        required: true // aca por si quieres que sea obligado 
      }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

      const command = interaction.options.getString('code')
      try{
    
        var evaled = eval(command)
    
        const embed = new Discord.MessageEmbed()
        
        .setTitle('**CODIGO EVALUADO CORRECTAMENTE!**')
        .setColor('GREEN')
        .addField('**Tipo**', `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
        .addField('**evaluado en:**', `\`\`\`yaml\n${Date.now() - interaction.createdTimestamp}ms\`\`\``, true)
        .addField('**entrada:**', `\`\`\`js\n${command}\`\`\``)
        .addField('**salida**', `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
        interaction.reply({embeds: [embed], ephemeral: false});

      }catch (error){
        const embederr = new Discord.MessageEmbed()
    
        
        .setColor('RED')
    
    
        .addField('**entrada:**', `\`\`\`js\n${command}\`\`\``)
        .addField('**error:**', `\`\`\`js\n${error}\`\`\``)
    
        interaction.reply({embeds: [embederr], ephemeral: false});
        console.log(`SLASH\n Eval por ${interaction.user.username} en el server ${interaction.guild.name}`)

      }
    },
};

// comando aportado por @IJust 💍ª#0001
// editado por @KredoF#3006