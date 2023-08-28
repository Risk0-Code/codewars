const points = (arrayOfMatches) => {
	let score = 0;
	for (const match of arrayOfMatches) {
		const result = match.split(":");
		if (result[0] > result[1]) {
			score += 3;
			continue;
		}
		if (result[0] === result[1]) {
			score++;
			continue;
		}
	}
	return score;
};
console.log(
	points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

// Better solution

// const points2 = (games) =>
// 	games.reduce((output, current) => {
// 		return (output +=
// 			current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
// 	}, 0);
