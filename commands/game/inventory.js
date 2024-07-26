const { 
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ComponentType,
    SlashCommandBuilder
} = require('discord.js');

const fs = require('fs');
const { data } = require('./play');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('View your inventory'),
    async execute(interaction) {
        
        await interaction.reply(`${interaction.user.username}'s inventory: \n${inventory}`);
    }
}