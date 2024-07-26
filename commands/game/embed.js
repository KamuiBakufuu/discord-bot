const {EmbedBuilder} = require('@discordjs/builders');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Send an embed!'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Hallihallo meine Lieben <3')
            .setColor(255, 192, 203)
            .setDescription('Mein allierliebstes Lieblings YT Video')
            .setURL('https://youtu.be/4gSOMba1UdM?si=6ajER31It-GRX8Bb')

        await interaction.reply({
            embeds: [embed],
        });
    },
};