const {
    SlashCommandBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
} = require('discord.js');

const fs = require('fs');
const { data } = require('./play');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Visit the shop'),
    async execute(interaction) {
        const shopItems = fs.readFileSync('shopItems.json', 'utf8');
        const shopItemsObj = JSON.parse(shopItems);
        
        const items = [];
        for (const item in shopItemsObj) {
            items.push({
                label: item,
                value: item,
            });
        }

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('shop')
            .setPlaceholder('Select an item')
            .addOptions(items);

        const row = new ActionRowBuilder()
            .addComponent(selectMenu);

        await interaction.reply({
            content: 'Welcome to the shop! What would you like to buy?',
            components: [row],
        });

        const filter = (i) => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ 
            componentType: ComponentType.StringSelect,
            filter,
        });

        collector.on('collect', async i => {
            const item = shopItemsObj[i.values[0]];
            await i.reply(`You bought a ${item.name} for ${item.price} coins!`);
        });
    },
};