const {SlashCommandBuilder} = require(`discord.js`);
const { data } = require("./ping");

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`user`)
    .setDescription(`Replies with user info!`),
    async execute(interaction) {
        await execute(interaction);
        {
            await interaction.reply(`This command was run by ${interaction.user.username} 
            who joined on $(interaction.user.joinedAt)`);
        }
    },
};