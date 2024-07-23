const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a game!'),
    async execute(interaction) {
        await execute(interaction);
        {
            await interaction.reply('Not yet implemented!');
        }
    },
};