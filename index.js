const cashier = (price, cash) => {
	let amountOfNotes;
	let change = parseFloat((cash - price).toFixed(2));
    console.log(`Price Of Goods: €${price} cents`);
	console.log(`Amount Given: €${cash} cents`);
	console.log(`Change Return: €${change} cents`);

	let current = [
		["one cent coin", 0.01],
		["two cents coin", 0.02],
		["five cents coin", 0.05],
		["ten cents coin", 0.1],
		["twenty cents coin", 0.2],
		["fiffthy cents coin", 0.5],
		["one euros coin", 1],
		["two euros coin", 2],
		["five euros notes", 5],
		["ten euros notes", 10],
		["twenty euros notes", 20],
		["fiffthy euros notes", 50],
		["hundred euros notes", 100],
		["five hundred euros notes", 500],
	];

	current.reverse();

	for (i in current) {
		
		if (change >= current[i][1]) {
			amountOfNotes = Math.floor(change / current[i][1]);
			
			change = parseFloat((change % current[i][1]).toFixed(2));
			console.log(
				`${amountOfNotes} x ${current[i][1]} == ${amountOfNotes} x ${current[i][0]}`
			);
		}
	}
};

cashier(3.50, 500, 00);
