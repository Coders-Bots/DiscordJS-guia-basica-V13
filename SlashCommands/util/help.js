const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu} = require("discord.js");
 
module.exports = {
    name: "help",
    description: "Muestra Los Comandos Que Tengo UnU",
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
if(!interaction.guild.me.permissionsIn(interaction.channel.id).has("EMBED_LINKS")) return interaction.reply("No Tengo Permiso De Mandar Embed Para Usar Este Comando")
        
console.log(`SLASH\n Help por ${interaction.user.username} en el server ${interaction.guild.name}`)

const row = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId("menu_prueba")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder('Menú!')
        .addOptions([
            {
                label: "Inicio",
                description: "Vuelve al embed principal",
                value: "inicio",
                emoji: "893668527955922964"
            },
            {
                label: "Info",
                description: "Comandos de información",
                value: "menuinfo",
                emoji: "🔍"
            },
            {
                label: "Interacción",
                description: "Comandos de Interacción",
                value: "menuinteraccion",
                emoji: "🎈"
            },
            {
                label: "Moderación",
                description: "Comandos de Moderación",
                value: "menumoderacion",
                emoji: "🔒"
            },
            {
                label: "NSFW",
                description: "Comandos +18",
                value: "menusnfw",
                emoji: "🔥"
            },
            {
                label: "Utilidad",
                description: "Comandos de Utilidad",
                value: "menutilidad",
                emoji: "🏓"
            },
            {
                label: "Economia",
                description: "Comandos de Economia",
                value: "menueconomia",
                emoji: "👛"
            },
        ])
)

const replyyyy = new Discord.MessageActionRow()
.addComponents(  
    new Discord.MessageButton()
    .setCustomId("xd")
    .setEmoji('896286040468377640')
    .setStyle("PRIMARY")
    .setDisabled(true)

)
const administracion = new Discord.MessageEmbed()
.setTitle("Categoria Administracion: ")
.setDescription("Comandos: ")
.addField("nuke","Borra El Canal Y Hace Otro Con Los Mismo Permisos Y Todo",true)
.addField("canal-sugerencia [Canal]","Establece El Canal De Sugerencias",true)
.addField("sugerir","Manda La Sugerencia Al Canal Puesto",true)
.addField("add_emoji [Emoji]\n add_emoji url [Url] [Nombre]","Agrega Un Emoji Al Servidor",true)
.addField("set-prefix <prefix>","Cambia El Prefix Del Bot Al Prefix De Tu Preferencia",true)
.setThumbnail("https://cdn.discordapp.com/emojis/849626363828895764.png?v=1")
.setTimestamp() 
.setColor("RANDOM")
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")

const bot = new Discord.MessageEmbed()
.setTitle("Categoria Bot: ")
.setDescription("Comandos: ")
.addField("botinfo","Muestra Toda La Informacion Necesaria Del Bot",true)
.setThumbnail("https://cdn.discordapp.com/emojis/841423173970296833.gif?v=1")
.setTimestamp() 
.setColor("RANDOM")
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")

const nsfw = new Discord.MessageEmbed()
.setTitle("Categoria Nsfw: ")
.setDescription("Comandos: ")
.addField("ass","Manda Fotos Nsfw",true)
.setThumbnail("https://cdn.discordapp.com/emojis/849627108241309757.png?v=1")
.setTimestamp() 
.setColor("RANDOM")
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")

const economia = new Discord.MessageEmbed()
.setTitle("Categoria Economia: ")
.setDescription("Comandos: ")
.addField("work","Trabajas Y Ganas Dinero",true)
.addField("slut","Slut Ganas Dinero",true)
.addField("rob [Usuario]","Le Robas Dinero A Alguen",true)
.addField("bal","Muestra Tu Dinero O El Dinero Del Mencionado",true)
.addField("daily","Recompensa Diaria Puedes Reclamarlo 1 Ves Al Dia",true)
.addField("dep [Cantidad]","Depositas Dinero En Tu Cuenta Bancaria",true)
.addField("with [Cantidad]","Sacas Dinero De Tu Cuenta Bancaria",true)
.setThumbnail("https://cdn.discordapp.com/emojis/849627058204442654.png?v=1")
.setTimestamp() 
.setColor("RANDOM")
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")

const utilidad = new Discord.MessageEmbed()
.setTitle("Categoria Utilidad: ")
.setDescription("Comandos: ")
.addField("convertir <extencion> <archivo>","Convierte Tu Archivo | link Que Mandaste A Lo Que Hayas Puesto",true)
.addField("avatar <@usuario>","Manda Foto De Perfil Tuya O Del Usuario Mencionado",true)
.addField("calcular [operacion]","Calcula La Operacion Que Pusiste",true)
.addField("snipe","Sirve Para Ver El Mensajes Que Se Ha Borrado Recientemente",true)
.addField("bigtext [texto]","El Texto Que Pusiste Lo Hace Emoji",true)
.addField("say <texto>","El Bot Dice Algo Por Ti",true)
.addField("ascii [Texto]","Pone Tu Texto En Un Texto Ascii.",true)
.setThumbnail("https://cdn.discordapp.com/emojis/841422148400840754.gif?v=1")
.setTimestamp() 
.setColor("RANDOM")
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")

const diversion = new Discord.MessageEmbed()
.setTitle("Categoria Diversion: ")
.setDescription("Comandos: ")
.addField("8ball <pregunta>","El Bot Responde Con Respuestas Aleatorias Tu Pregunta",true)
.addField("gato <@usuario>","El Bot Manda La Base Del Juego Gato | 4raya | tictactoe Para Jugar Solo Debes Apretar El Emoji Con El Numero Del Cuadro Que Quieras",true)
 .addField("kiss <@usuario>","Besas Al Usuario Mencionado",true)
.addField("kill <usuario>","Matas Al Usuario Mencionado",true)
.addField("banana","Muestra Cuanto Mide La Banana",true)
.setThumbnail("https://cdn.discordapp.com/emojis/849624353511309326.png?v=1")
.setTimestamp() 
.setColor("RANDOM")
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")


//////////<> obligatorio [] opcional
const help = new Discord.MessageEmbed()
.setTitle("Help")
.setDescription("Para Ver Cada Comando Seleciona El Menu\n ``Mis Lista De Comandos: ``\n")
.addField("Diversion","a",true)
.addField("Administracion","a",true)
.addField("Utilidad","a",true)
.addField("Bot","a",true)
.addField("Economia","a",true)
.addField("Nsfw","a",true)
.addField("Menu Principal","a",true)
.setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
.setAuthor(client.user.username, client.user.avatarURL())
.setColor("RANDOM")
.setTimestamp() 
.setFooter(`Pedido Por: ${interaction.user.username} ` +client.guilds.cache.size +" Servidores 💝 | Kazuya®")

interaction.reply({ content: "<a:azul:893275223191871579> Seleciona La Opcion En El Menu De Abajo Para Ver Los Comandos", components: [replyyyy], ephemeral: true  })

const ifilter = i => i.user.id === interaction.user.id;

const m = await interaction.channel.send({ embeds: [help], components: [row] })


const collector = m.createMessageComponentCollector({filter: ifilter, componentType: "SELECT_MENU" })

collector.on("collect", async i => {
const value = i.values[0]
    //embed principal (vuelve al inicio)
    if (value === 'inicio') {
        await i.deferUpdate()
        i.editReply({ embeds: [help], components: [row] })
    }
    //embed de info
    if (value === 'menuinfo') {
        await i.deferUpdate()
        i.editReply({ embeds: [bot], components: [row] })
    }
    //embed de interaccion
    if (i.values[0] === 'menuinteraccion') {
        await i.deferUpdate()
        i.editReply({ embeds: [diversion], components: [row] })
    }
    //embed de moderación
    if (value === 'menumoderacion') {
        await i.deferUpdate()
        i.editReply({ embeds: [administracion], components: [row] })
    }
    //embed de nsfw
    if (value === 'menusnfw') {
        await i.deferUpdate()
        i.editReply({ embeds: [nsfw], components: [row] })
    }
    //embed de utilidad
    if (value === 'menutilidad') {
        await i.deferUpdate()
        i.editReply({ embeds: [utilidad], components: [row] })
    }
    //embed de eco

    if (value === 'menueconomia') {
        await i.deferUpdate()
        i.editReply({ embeds: [economia], components: [row] })
    }

})

} catch(e) { console.log(e)}        
    },
};