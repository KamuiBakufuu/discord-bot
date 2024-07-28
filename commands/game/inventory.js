/*
const { 
    SlashCommandBuilder
} = require('discord.js');

const fs = require('fs');
const inventory = fs.readFileSync('inventory.json', 'utf8');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('View your inventory'),
    async execute(interaction) {
        
        await interaction.reply(`${interaction.user.username}'s inventory: \n${inventory}`);
    }
}
*/