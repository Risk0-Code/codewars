const invert = (numbersArray) => {
	const invertedArray = [];
	numbersArray.forEach((number) => {
		number > 0
			? invertedArray.push(-Math.abs(number))
			: invertedArray.push(Math.abs(number));
	});
	return invertedArray;
};

console.log(invert([1, 2, 3, 4, 5]));

//Better solution
//const invert = array => array.map(num => -num);
