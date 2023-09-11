const sumTwoSmallestNumbers = (array) =>
	array.sort((a, b) => a - b)[0] + array.sort((a, b) => a - b)[1];

sumTwoSmallestNumbers([1, 2, 3, 4, 5]);
