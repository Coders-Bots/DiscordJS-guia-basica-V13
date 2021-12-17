console.clear();
const Discord = require('discord.js')
const { Client, Collection, MessageEmbed, Intents } = require("discord.js");

const megadb = require('megadb');
const ms = require('ms')

//use DB
let prefixdb = new megadb.crearDB('Prefixes');

const fs = require('fs');
const { readdirSync } = require('fs');

const client = new Client({
  ws: { properties: { $browser: "Discord Android" } },
  intents: 6775
});

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.cooldowns = new Collection();
let config = require("./config.json");
let package = require("./package.json")


client.on('messageCreate', async message => {

  let prefix = prefixdb.has(message.guild.id)
    ? await prefixdb.get(message.guild.id)
    : `${config.client.default_prefix}`;
  if (message.author.bot) return
  if (message.content.match(`^<@!?${client.user.id}>( |)$`)) {
    let eprefix = new Discord.MessageEmbed()
      .setTitle(client.user.username)
      .setDescription('> Hola, mi prefix en el servidor es => `' + prefix + '`  \nSi nesesitas ayuda usa =>`' + prefix + '`help')
      .setColor("#fff")
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/791460693345828884/821914862094778388/color_seperater_thingy.gif')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(client.user.username + " | " + package.version, client.user.displayAvatarURL())
    try {
      message.channel.send({ embeds: [eprefix] })
    } catch (e) { console.log(e) }
    return
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);

  const commandName = args.shift().toLowerCase();

  if (!commandName) return;

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(Command_name))
  if (!command) return

  //DM
  if (command.guildOnly && message.channel.type === 'DM') {
    try {
      return message.reply('Lo siento, este comando no esta disponible para los canales privados.')
    } catch (e) { console.log(e) }
  }//fin

  //onlycreator     
  let owners = config.client.devs

  if (command.devs_execute && owners.includes(message.author.id)) {
    command.execute(message, args, client)
    return
  }

  if (command.permissions) {
    const authorPerms = message.channel.permissionsFor(message.author);
    if (!authorPerms || !authorPerms.has(command.permissions)) {
      let mispermisos;

      if (command.permissions === "MANAGE_EMOJIS") {
        mispermisos = "Gestionar Emojis"
      }

      if (command.permissions === "KICK_MEMBERS") {
        mispermisos = "Expulsar miembros"
      }

      if (command.permissions === "BAN_MEMBERS") {
        mispermisos = "Banear miembros"
      }

      if (command.permissions === "MANAGE_GUILD") {
        mispermisos = "Editar servidor"
      }

      if (command.permissions === "MANAGE_CHANNELS") {
        mispermisos = "Editar canales"
      }

      if (command.permissions === "ADMINISTRATOR") {
        mispermisos = "Administrador"
      }

      if (command.permissions === "ADD_REACTIONS") {
        mispermisos = "Añadir reacciones"
      }

      if (command.permissions === "VIEW_AUDIT_LOG") {
        mispermisos = "Mirar registro de auditoria"
      }

      if (command.permissions === "VIEW_CHANNEL") {
        mispermisos = "Mirar canal"
      }

      if (command.permissions === "SEND_MESSAGES") {
        mispermisos = "Enviar mensajes"
      }

      if (command.permissions === "MANAGE_MESSAGES") {
        mispermisos = "Manejar mensajes"
      }

      if (command.permissions === "MANAGE_ROLES") {
        mispermisos = "Manejar roles"
      }
      if (command.permissions)
        try {
          return message.channel.send(`No Pude Ejecutar El Comando Debido A La Falta De Permisos\nnecesitas: \`${mispermisos}\``)
        } catch (e) { console.log(e) }
    }
  }
  ///categoria botpermisiob
  if (command.permissionsme) {
    if (!message.guild.me.hasPermission(command.permissionsme)) {


      let mispermisos;

      if (command.permissionsme === "MANAGE_EMOJIS") {
        mispermisos = "Gestionar_Emojis"
      }

      if (command.permissionsme === "KICK_MEMBERS") {
        mispermisos = "Expulsar miembros"
      }

      if (command.permissionsme === "BAN_MEMBERS") {
        mispermisos = "Banear miembros"
      }

      if (command.permissionsme === "MANAGE_GUILD") {
        mispermisos = "Editar servidor"
      }

      if (command.permissionsme === "MANAGE_CHANNELS") {
        mispermisos = "Editar canales"
      }

      if (command.permissionsme === "ADMINISTRATOR") {
        mispermisos = "Administrador"
      }

      if (command.permissionsme === "ADD_REACTIONS") {
        mispermisos = "Añadir reacciones"
      }

      if (command.permissionsme === "VIEW_AUDIT_LOG") {
        mispermisos = "Mirar registro de auditoria"
      }

      if (command.permissionsme === "VIEW_CHANNEL") {
        mispermisos = "Mirar canal"
      }

      if (command.permissionsme === "SEND_MESSAGES") {
        mispermisos = "Enviar mensajes"
      }

      if (command.permissionsme === "MANAGE_MESSAGES") {
        mispermisos = "Manejar mensajes"
      }

      if (command.permissionsme === "MANAGE_ROLES") {
        mispermisos = "Manejar roles"
      }
      if (command.permissionsme === "EMBED_LINKS") {
        mispermisos = "Enviar Embeds"
      }
      try {
        return message.reply('No Pude Ejecutar El Comando Debido A La Falta De Permisos\n\nnecesito:`' + mispermisos + '`')
      } catch (e) { console.log(e) }
    }
  }

  //args NON
  if (command.args && !args.length) {
    let lineReply = `Hacen Falta Argumentos , ${message.author}!`;

    if (command.usage) {
      lineReply += `\nLa Forma Correcta Seria \`${prefix}${command.name} ${command.usage}\``;
    }
    try {
      return message.channel.send(lineReply);
    } catch (e) { console.log(e) }

  }//fin

  const { cooldowns } = client;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      try {
        return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${command.name}\` `);
      } catch (e) { console.log(e) }
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  console.log(commandName + " por " + message.author.tag + " en el server " + message.guild.name)
  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    try {
      message.reply(`\`\`\`prolog\n❌ | Ha Ocurrido Un Error Mientras Se Ejecutaba El Comando\`\`\``);
    } catch (e) { console.log(e) }
  }

})


let loader = require("./core/index")
loader.all(client)

///////////////////Snipe////////////

client.snipes = new Map();
client.snipese = new Map();

client.on('messageDelete', message => {
  if (!message.guild.me.permissionsIn(message.channel.id).has("ATTACH_FILES")) return;

  let attach;

  if (message.attachments.size) {
    attach = new Discord.MessageAttachment(message.attachments.first().url, `${message.attachments.first().name}`)
  }
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel,
    attachment: attach
  });
});

client.on('messageUpdate', message => {
  client.snipese.set(message.channel.id, {
    content: message.content,
    edit: message.author,
    canal: message.channel
  });
});


client.login(config.client.token).then(x => console.log("Bot logeado "+ client.user.username))
