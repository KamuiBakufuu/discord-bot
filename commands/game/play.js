const { 
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    ComponentType,
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a game!'),
    async execute(interaction) {
        const confirm = new ButtonBuilder()
            .setCustomId('confirm')
            .setLabel('Yes')
            .setStyle(ButtonStyle.Success);
        
        const cancel = new ButtonBuilder()
            .setCustomId('cancel')
            .setLabel('No')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder()
            .addComponents(confirm, cancel);

        await interaction.reply({
            content: 'Welcome! Would you like to play a game?',
            components: [row],
        });

        const filter = (i) => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ 
            componentType: ComponentType.Button,
            filter,
        });

        collector.on('collect', (i) => {
            if (i.customId === 'confirm') {
                i.deferUpdate().then(() => {
                    interaction.followUp("Let's start!");

                    // Add game logic here
                    return;
                });
            } 
            
            else if (i.customId === 'cancel') {
                i.deferUpdate().then(() => {
                    interaction.followUp('Maybe next time!');
                    return;
                });
            }
        });
    },
};