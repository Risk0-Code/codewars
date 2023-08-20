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

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// 7kyu
