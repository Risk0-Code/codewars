// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// 5 kyu

const colorToHex = (c) => {
	if (c > 255) {
		return "FF";
	}
	if (c < 0) {
		return "00";
	}
	const hex = c.toString(16);
	return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
};

const rgb = (r, g, b) => {
	return `${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`;
};

console.log(rgbToHex(148, 0, 211)); // returns 9400D3
