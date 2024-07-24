const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { Component } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a game!'),
    async execute(interaction) {

        const confirm = new ButtonBuilder()
            .setCustomId('confirm')
            .setLabel('Yes')
            .setStyle('Success');
        
        const cancel = new ButtonBuilder()
            .setCustomId('cancel')
            .setLabel('No')
            .setStyle('Danger');

        const row = new ActionRowBuilder()
            .addComponents(confirm, cancel);

        await interaction.reply({
            content: 'Welcome! Would you like to play a game?',
            Components: [row],
        });
    },
};