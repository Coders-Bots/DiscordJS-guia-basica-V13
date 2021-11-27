const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');
const db = require('megadb')
const bl = new db.crearDB('blacklist')

module.exports = {
    name: "blacklist",
    description: "Agrega Un Usuario A La Blacklist *ONLYOWNER* ",
    userperm: [""],
    botperm: [""],
    owneronly: "true",
    type: 'CHAT_INPUT',
        options: [
      {
        name: "usuario",
        description: "La Persona Que Meteras La BlackList",
        type: 6, // aca el tipo en este caso 6 porque se necesita mencionar un usuario
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
      try{

console.log(`SLASH\n Blacklist por ${interaction.user.username} en el server ${interaction.guild.name}`)

  const user = interaction.options.getUser('usuario')

  if(user.id === "695684619088953405") return interaction.reply({ content: `No Puedes Añadir Al Owner ._.`, ephemeral: true })


  if(bl.tiene(`${user.id}`)){
    interaction.reply({ content: 'El usuario que ingresaste ya se encuentra en la blacklist.', ephemeral: true })
    return;
  }

  bl.establecer(`${user.id}`, {BlackList: 'si'})

          interaction.reply({ content: `el usuario ${user} ha sido añadido a la blacklist correctamente`, ephemeral: true })

      } catch(e) { console.log(e)}        
    },
};
