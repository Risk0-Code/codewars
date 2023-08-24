const repeatString = (n, s) => {
	const stringArray = [];
	for (let i = 0; i < n; i++) {
		stringArray.push(s);
	}
	const repeatedString = stringArray.join("");
	return repeatedString;
};

// Better Solution
// function repeatStr (n, s) {
//  return s.repeat(n);
// }

console.log(repeatString(4, "Hey"));
