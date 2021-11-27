const fs = require('fs');

function cmds(client) {
    const commandFolders = fs.readdirSync("./comandos");
    for (const folder of commandFolders) {
      const commandFiles = fs.readdirSync(`./comandos/${folder}`).filter(file => file.endsWith(".js"))
      for (const file of commandFiles) {
        const command = require(`../comandos/${folder}/${file}`);
        client.commands.set(command.name, command)
      }
    }    
}

module.exports.cmds = cmds