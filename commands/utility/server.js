const {SlashCommandBuilder} = require('discordjs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info!'),
    async execute(interaction) {
        await interaction.reply(`${interaction.guild.name} has ${interaction.guild.memberCount} members!`);
    },
};