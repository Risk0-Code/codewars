const solution = (string) => {
	if (string.length === 0) {
		return [];
	}
	const solutionArray = string
		.split("")
		.reduce((acc, val, idx) =>
			idx % 2 === 0 ? (acc ? `${acc},${val}` : val) : acc + val
		)
		.split(",");
	if (solutionArray[solutionArray.length - 1].length === 1) {
		solutionArray[solutionArray.length - 1] += "_";
	}
	return solutionArray;
};

function solution(s) {
	return (s + "_").match(/.{2}/g) || [];
}

console.log(solution("abcdef"));
