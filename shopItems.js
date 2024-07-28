const fs = require('fs');

// Step 1: Create a JavaScript object with items and their prices
const shopItemsObj = {
	item1: { name: 'Mini Box', description: 'Contains 2 random character badges.', price: 100 },
	item2: { name: 'Giant Box', description: 'Contains 5 random character badges.', price: 150 },
};

// Step 2: Convert the JavaScript object to a JSON string
const jsonString = JSON.stringify(shopItemsObj, null, 2);

// Step 3: Write the JSON string to a file
fs.writeFile('shopItems.json', jsonString, (err) => {
	if (err) {
		console.error('Error writing file', err);
	} else {
		console.log('Successfully wrote file');
	}
});