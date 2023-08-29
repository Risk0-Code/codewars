const comp = (array1, array2) => {
	// todo 1: check if one of the array is empty or if one of the array in longer, if so return false
	if (!array1 || !array2) return false;
	if (array1.length !== array2.length) return false;

	// create a copy of array1 to shift item and check if this is empty at the end
	const filteredArray = [...array1];

	// todo 2: go through array1 and square each number
	for (const number1 of array1) {
		const squared = number1 * number1;
		for (const number2 of array2) {
			// todo 3: go through array2 and check each value
			if (squared !== number2) {
				continue;
			}
			// todo 3: if one of them is the same as todo2 then remove value from array2, then go back on step two
			const index = array2.indexOf(squared);
			array2.splice(index, 1);
			break;
		}

		// copy of array1 to shift items without destroying the code
		filteredArray.shift();
	}

	// todo 4: if array2 still has some values then return false, otherwise return true
	return filteredArray.length === 0 && array2.length === 0;
};

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
let a3 = [121, 144, 19, 161, 19, 144, 19, 11];
let a4 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
console.log(a3.length, a4.length);
console.log(comp(a3, a4));

// const array = [2, 5, 5];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) {
// 	// only splice array when item is found
// 	array.splice(index, 1); // 2nd parameter means remove one item only
// }

// // array = [2, 9]
// console.log(array);
