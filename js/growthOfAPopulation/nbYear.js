const nbYear = (p0, percent, aug, p) => {
	let valuep0 = p0;
	let howManyYears = 0;
	while (valuep0 < p) {
		valuep0 = Math.floor(valuep0 + (valuep0 * percent) / 100 + aug);
		howManyYears++;
	}
	return howManyYears;
};
console.log(nbYear(1500, 5, 100, 5000));
