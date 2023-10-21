// const snail = (array) => {
// 	let indexX = 0;
// 	let indexY = 0;
// 	const dataArray = [...array];

// 	for (indexX = 0; dataArray.length !== 0; indexX) {
// 		const ArrayYLength = dataArray[indexY].length - 1;
// 		const bigArrayLength = dataArray.length - 1;
// 		console.log(indexX, indexY);
// 		if (indexX < ArrayYLength && indexY === 0) {
// 			indexX++;
// 			console.log("X ++");
// 			continue;
// 		} else if (indexX === ArrayYLength && indexY !== bigArrayLength) {
// 			indexY++;
// 			console.log("Y ++");
// 			continue;
// 		} else if (indexY === bigArrayLength && indexX !== 0) {
// 			indexX--;
// 			console.log("X --");
// 			continue;
// 		} else if (indexX === 0 && indexY !== 0) {
// 			indexY--;
// 			console.log("Y --");
// 			continue;
// 		}
// 	}
// };

const snail = (array) => {
	if (array.length === 1) {
		return array[0];
	}
	let indexX = 0;
	let indexY = 0;
	let xMin = 0;
	let yMin = 0;
	let xMax = array.length - 1;
	let yMax = array.length - 1;
	let finalArray = [];

	while (xMin !== xMax || yMin !== yMax) {
		while (indexX < xMax) {
			finalArray.push(array[indexY][indexX]);
			indexX++;
		}
		if (yMax > yMin) {
			yMin++;
		}
		while (indexY < yMax) {
			finalArray.push(array[indexY][indexX]);
			indexY++;
		}
		if (xMax > xMin) {
			xMax--;
		}
		while (indexX > xMin) {
			finalArray.push(array[indexY][indexX]);

			indexX--;
		}
		if (yMax > yMin) {
			yMax--;
		}
		while (indexY > yMin) {
			console.log(indexY, yMin);
			finalArray.push(array[indexY][indexX]);

			indexY--;
		}
		if (xMax > xMin) {
			xMin++;
		}
	}
	if (array.length % 2) {
		finalArray.push(array[yMin][xMin - 1]);
		finalArray.push(array[yMin][xMin]);
	} else {
		finalArray.push(array[yMin][xMin]);
	}

	return finalArray;
};

console.log(
	snail([
		[1, 2, 3, 4, 5, 6],
		[20, 21, 22, 23, 24, 7],
		[19, 32, 33, 34, 25, 8],
		[18, 31, 36, 35, 26, 9],
		[17, 30, 29, 28, 27, 10],
		[16, 15, 14, 13, 12, 11],
	])
);
