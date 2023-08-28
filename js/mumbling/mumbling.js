const accum = (string) => {
	const stringArray = [];
	string.split("").forEach((letter, index) => {
		if (index === 0) {
			return stringArray.push(letter.toUpperCase());
		}
		const letterArray = [];
		for (let i = 0; i < index; i++) {
			if (i === 0) {
				letterArray.push(letter.toUpperCase());
			}
			letterArray.push(letter.toLowerCase());
		}
		stringArray.push(letterArray.join(""));
	});
	return stringArray.join("-");
};

console.log(accum("hello"));

// 7 kyu

// function accum( s ) {
//   return s
//     .split( '' )
//     .map( ( c, i ) => c.toUpperCase() + c.toLowerCase().repeat( i ) )
//     .join( '-' );
// }
