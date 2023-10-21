// const findAll = (sum, count) => {
// 	// todo 1 : get a number array who have $count digits
// 	let numberArray = [];
// 	const goodAnswer = new Set();

// 	const arraySum = (array) => array.reduce((acc, num) => acc + num, 0);
// 	let initialValue = 1;
// 	while (numberArray.length < count) {
// 		numberArray.push(initialValue);
// 	}

// 	for (const [index, number] of numberArray.reverse().entries()) {
// 		for (let i = 1; i <= 9; i++) {
// 			for (let j = i; j <= 9; j++) {
// 				if (arraySum(numberArray) < sum) {
// 					console.log(index, numberArray[index]);
// 					numberArray[index] = j;
// 				}
// 			}

// 			if (arraySum(numberArray) === sum) {
// 				goodAnswer.add(numberArray.join(""));
// 				numberArray[index] = number;
// 				numberArray[index + 1] += 1;
// 			}
// 		}
// 		numberArray = [];
// 		initialValue++;
// 		while (numberArray.length < count) {
// 			numberArray.push(initialValue);
// 		}
// 		console.log(numberArray);
// 	}

// 	return [...goodAnswer];
// };
// console.log(findAll(35, 6));

// SOLUTION

function findAll(sumOfDigits, digits) {
	let firstOfDigitRange = Number("1".repeat(digits));
	let lastOfDigitRange = Number("9".repeat(digits));
	let range = [];

	for (let i = firstOfDigitRange; i <= lastOfDigitRange; i++) {
		while (i.toString().includes("0")) {
			i = i.toString().split("");
			i = i
				.map((el, ind) => (el === "0" ? el.replace("0", i[ind - 1]) : el))
				.join("");
		}
		if (
			i
				.toString()
				.split("")
				.reduce((acc, curr) => acc + Number(curr), 0) === sumOfDigits
		) {
			range.push(i);
		}
	}

	if (range.length === 0) {
		return [];
	} else if (range.length === 1) {
		return [1, range[0].toString(), range[0].toString()];
	} else {
		return [
			range.length,
			range[0].toString(),
			range[range.length - 1].toString(),
		];
	}
}

console.log(findAll(65, 17));
