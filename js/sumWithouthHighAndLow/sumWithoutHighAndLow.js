const sumArray = (array) => {
	// todo 1: remove the highest and lowest elements
	if (!array) return 0;
	array.splice(array.indexOf(Math.max(...array)), 1);
	array.splice(array.indexOf(Math.min(...array)), 1);
	// todo 2: sum the rest of the array and return value
	return array.reduce((a, b) => a + b, 0);
};

console.log(sumArray([6, 2, 1, 8, 10]));
