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

        const reply = await interaction.reply({
            content: 'Click a button...',
            components: [actionRow]
        });

        const filter = (i) => i.user.id === interaction.user.id;

        const collector = reply.createMessageComponentCollector({ 
            ComponentType: ComponentType.BUTTON,
            filter, 
            time: 15000 });

        collector.on('collect', (interaction) => {
            if (interaction.customId === 'button') {
                interaction.reply('You clicked the first button!');
            } 
            
            else if (interaction.customId === 'secondButton') {
                interaction.reply('You clicked the second button! How dare you?! >:(');
            }
        });
    },
};