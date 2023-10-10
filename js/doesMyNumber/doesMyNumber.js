const narcissistic = (value) => {
	let result = 0;
	value
		.toString()
		.split("")
		.map((number) => (result += number ** value.toString().length));
	return result === value;
};

console.log(narcissistic(153));
