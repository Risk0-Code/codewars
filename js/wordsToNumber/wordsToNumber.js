const parseInt = (string) => {
	const words = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		ten: 10,
		eleven: 11,
		twelve: 12,
		thirteen: 13,
		fourteen: 14,
		fifteen: 15,
		sixteen: 16,
		seventeen: 17,
		eighteen: 18,
		nineteen: 19,
		twenty: 20,
		thirty: 30,
		forty: 40,
		fifty: 50,
		sixty: 60,
		seventy: 70,
		eighty: 80,
		ninety: 90,
		hundred: 100,
		thousand: 1000,
		million: 1000000,
	};

	if (string.split(" ")[1] === "million") {
		return 1000000;
	}

	const findDozens = (number, index, convertedWords, dozens) => {
		if (number < 20) {
			if (convertedWords[index - 1] === 100) dozens.push(number);

			if (!convertedWords[index + 1] === 100) dozens.push(number);
		}
		if (number >= 20 && convertedWords[index + 1] < 100) {
			// check is there is a next number
			dozens.push(
				+`${number.toString().split("")[0]}${convertedWords[index + 1]}`
			);
		} else if (number >= 20) {
			dozens.push(number);
		}
	};

	const splitByThousand = string.split("thousand");
	const completeNumber = [];

	splitByThousand.forEach((string, index) => {
		let returnValue;

		if (string === "") {
			completeNumber.push(`000`);
			return;
		}
		const SplittedString = string.split(/\s|-|and/);
		const convertedWords = [];
		SplittedString.forEach((numberWord, index) => {
			if (numberWord !== "") {
				convertedWords.push(words[numberWord]);
			}
		});

		if (convertedWords.length === 1) {
			if (index === 1) {
				completeNumber.push(`00${convertedWords[0]}`);
				return;
			}
			completeNumber.push(convertedWords[0]);
			return;
		}
		const dozens = [];
		let hundred;
		convertedWords.forEach((number, index) => {
			if (number < 100) {
				findDozens(number, index, convertedWords, dozens);
			}
			if (number === 100) {
				if (convertedWords[index - 1] < 10) {
					hundred = convertedWords[index - 1];
				} else {
					hundred = 1;
				}
			}
		});
		const higherDozens = dozens.length
			? dozens.reduce((highest, current) =>
					highest < current ? current : highest
			  )
			: undefined;
		if (hundred) {
			if (dozens.length === 0 || !higherDozens) {
				returnValue = +`${hundred}00`;
			} else if (higherDozens < 10) {
				returnValue = +`${hundred}0${higherDozens}`;
			} else if (higherDozens >= 10) {
				returnValue = +`${hundred}${higherDozens}`;
			}
		} else {
			returnValue = higherDozens;
		}
		console.log(index);
		completeNumber.push(returnValue);
	});
	console.log(completeNumber);
	return +completeNumber.join("");
};

console.log(parseInt("one million"));
