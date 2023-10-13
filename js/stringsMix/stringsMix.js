const mix = (s1, s2) => {
	const argsInArray = [s1, s2];
	const datas = [];
	const letters = new Set();

	argsInArray.forEach((arg) => {
		const data = {};

		arg.split("").forEach((letter) => {
			// sourcery skip: dont-reassign-parameters

			if (!letter.match(/[a-z]/)) {
				return;
			}

			if (!data[letter]) {
				let count = 0;
				arg.split("").forEach((letter2) => {
					if (letter === letter2) {
						count++;
					}
				});
				data[letter] = count;
				letters.add(letter);
			}
		});
		datas.push(data);
	});
	console.log(datas);
	const finalData = {};
	const finalArray = [];

	letters.forEach((letter) => {
		const s1Sum = datas[0][letter] || 1;
		const s2Sum = datas[1][letter] || 1;
		if (!(s1Sum - 1) && !(s2Sum - 1)) {
			return;
		}
		if (s1Sum > s2Sum) {
			finalArray.push(`1:${letter.repeat(s1Sum)}`);
		}
		if (s2Sum > s1Sum) {
			finalArray.push(`2:${letter.repeat(s2Sum)}`);
		}
		if (s1Sum === s2Sum) {
			finalArray.push(`=:${letter.repeat(s2Sum)}`);
		}
	});

	const orderedFinalData = Object.keys(finalData).sort();

	for (const letter of orderedFinalData) {
		finalArray.push(finalData[letter]);
	}

	return finalArray
		.sort()
		.sort((a, b) => b.length - a.length)
		.join("/");
};

console.log(mix("Lords of the Fallen", "gamekult"));
