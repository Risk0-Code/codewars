const getMiddle = (s) => {
	if (s.length % 2) {
		return s.split("")[Math.floor(s.length / 2)];
	} else {
		return `${s.split("")[s.length / 2 - 1]}${s.split("")[s.length / 2]}`;
	}
};

console.log(getMiddle("test"));
