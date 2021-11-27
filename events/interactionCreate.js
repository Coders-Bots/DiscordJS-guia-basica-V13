const Discord = require('discord.js')
const db = require('megadb')
const blacklist = new db.crearDB('blacklist')
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "interacionCreate",

    async execute(interaction, client) {

        let i = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/775053583527051276/850118491440414791/y2mate.com_-_Lo_ignora_epicamente_360p.mp4")
        let bl = blacklist.tiene(interaction.user.id);
        try {
            if (bl) return interaction.reply({ content: "*Lo ignora epicamente ", files: [i], ephemeral: true });
        } catch (e) { console.log(e) }

        // Slash Command Handling
        if (interaction.isCommand()) {

            if (interaction.guildId == null)return

            const cmd = client.slashCommands.get(interaction.commandName);
            if (!cmd)
                return interaction.followUp({ content: "An error has occured " });

            const args = [];

            for (let option of interaction.options.data) {
                if (option.type === "SUB_COMMAND") {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) args.push(option.value);
            }

            const userperm = interaction.member.permissions.has(cmd.userperm);
            const botperm = interaction.guild.me.permissions.has(cmd.botperm);
            const send_message = interaction.guild.me.permissions.has("SEND_MESSAGES");
            const EMBED_LINKS = interaction.guild.me.permissions.has("EMBED_LINKS");
            if (!send_message) return;
            if (!EMBED_LINKS) return interaction.reply("a");
            if (!userperm) return interaction.reply({ content: "No tienes el permiso " + cmd.userperm, ephemeral: true })
            if (!botperm) return interaction.reply({ content: "No tengo el permiso " + cmd.botperm, ephemeral: true })


            if (cmd.owneronly == true) {

                if (interaction.user.id !== client.config.owner) {

                    return interaction.reply({ content: "Solo el dueño del bot puede ejecutar este comando.", ephemeral: true })
                }

            }
            interaction.member = interaction.guild.members.cache.get(interaction.user.id);

            cmd.run(client, interaction, args);
        }

        // Context Menu Handling
        if (interaction.isContextMenu()) {
            await interaction.deferReply({ ephemeral: false });
            const command = client.slashCommands.get(interaction.commandName);
            if (command) command.run(client, interaction);
        }
    }
}