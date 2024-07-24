const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a game!'),
    async execute(interaction) {
        await interaction.reply('Not yet implemented!');
    },
};