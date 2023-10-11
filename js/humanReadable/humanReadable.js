const formatDuration = (timeInSeconds) => {
	if (timeInSeconds === 0) {
		return "now";
	}

	const date = {};

	const valueTime = {
		year: 60 * 60 * 24 * 365, // secondsInMinute * minutesInHour * hoursInDay * DaysInYear
		day: 60 * 60 * 24, // secondsInMinute * minutesInHour * hoursInDay
		hour: 60 * 60, // secondsInMinute * minutesInHour
		minute: 60, // secondsInMinute
		second: 1,
	};

	for (const key in valueTime) {
		if (timeInSeconds >= valueTime[key]) {
			date[key] = Math.floor(timeInSeconds / valueTime[key]);
			timeInSeconds -= valueTime[key] * date[key];
		}
	}

	const dateArray = [];
	for (const key in date) {
		dateArray.push(
			date[key] > 1 ? `${date[key]} ${key}s` : `${date[key]} ${key}`
		);
	}

	return dateArray.reduce((previous, current, index, array) => {
		const isLast = index === array.length - 1;
		return previous + (isLast ? ` and ` : ", ") + current;
	});
};
console.log(formatDuration(122));
