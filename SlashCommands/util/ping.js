const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "EL Pepe Vs Ete Sech",
    userperm: [""],
    botperm: [""],
    owneronly: "false",
    type: 'CHAT_INPUT',
   
    run: async (client, interaction, args) => {
        try{
        let ping = Date.now() - interaction.createdTimestamp

            interaction.reply("Pong 🏓 El Api es de "+ Math.floor(client.ws.ping)+"ms 👀\n El Ping Del Bot Es De " + ping + "ms 🤖")  
            console.log(`SLASH\n Ping por ${interaction.user.username} en el server ${interaction.guild.name}`)
  
                } catch(e) { console.log(e)}        

    },
};
