const { glob } = require("glob");
const { promisify } = require("util");
const config = require("../config.json")
const globPromise = promisify(glob);

async function slash(client) {
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
        const mode = config.slash.mode

        if(mode.dev.enabled){

            await client.guilds.cache.get(`${mode.dev.GuildID}`).commands.set(arrayOfSlashCommands);

        } else{
            await client.application.commands.set(arrayOfSlashCommands)
        };

    });
}

module.exports.slash = slash