const transform = (string) => {
	stringToTransform = string;
	for (const vowel of ["a", "e", "i", "o", "u", "y"]) {
		stringToTransform = stringToTransform.replaceAll(
			vowel,
			`${vowel}p${vowel}`
		);
	}
	return stringToTransform;
};
console.log(transform("ceci est un test pour hdm"));
