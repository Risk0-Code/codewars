const isIsogram = (word) => {
	const lowercasedWord = word.toLowerCase();
	const seenCharacters = new Set();
	for (const letter of lowercasedWord) {
		if (seenCharacters.has(letter)) {
			return false; // Found a duplicate letter
		}
		seenCharacters.add(letter);
	}

	return true; // No duplicate letter found
};

const word3 = "Apple";
const word4 = "Banana";

console.log(isIsogram(word3));
console.log(isIsogram(word4));
