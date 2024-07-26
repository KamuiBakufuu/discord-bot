const { 
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ComponentType,
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buttontest')
        .setDescription('Replies with a button!'),
    async execute(interaction) {
        const button = new ButtonBuilder()
            .setCustomId('button')
            .setLabel('Click me!')
            .setStyle(ButtonStyle.Success)
            .setDisabled(false);   

        const secondButton = new ButtonBuilder()
            .setCustomId('secondButton')
            .setLabel("Don't click me!")
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(false);

        const actionRow = new ActionRowBuilder()
            .addComponents(button, secondButton);

        await interaction.reply({
            content: 'Click a button...',
            components: [actionRow],
        });
    },
};