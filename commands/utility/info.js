const { 
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ComponentType,
    SlashCommandBuilder
} = require('discord.js');
const { data } = require('../game/play');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get information about the bot.'),
    async execute(interaction) {
        const Discord = new ButtonBuilder()
            .setCustomId('discord')
            .setLabel('BattleBot Tactics Discord server')
            .setStyle(ButtonStyle.Link)
            .setURL('https://discord.gg/eXBQyVerqd');

        const Github = new ButtonBuilder()
            .setCustomId('github')
            .setLabel('Github repository')
            .setStyle(ButtonStyle.Link)
            .setURL('https://github.com/KamuiBakufuu/discord-bot');
    },
};