const theLift = (queue, capacity) => {
	const path = [0];
	const lift = [];

	const liftStart = 0;
	let isQueueEmpty = false;

	for (let level = liftStart; !isQueueEmpty; level) {
		const floorQueue = queue[level];
		const isFloorEmpty = floorQueue.length === 0;
		const isLiftEmpty = lift.length === 0;
		if (level === 0) {
			direction = "up";
		}

		for (let index = 0; index < lift.length; index++) {
			const people = lift[index];
			console.log(people);

			if (people === level) {
				if (path[path.length - 1] !== level) {
					path.push(level);
				}
				lift.splice(index, 1);
				index--;
			}
		}

		for (let index = 0; index < floorQueue.length; index++) {
			const people = floorQueue[index];

			if (people > level && direction === "up") {
				if (lift.length < capacity) {
					lift.push(people);
					floorQueue.splice(index, 1);
					index--;
				}
				if (path[path.length - 1] !== level) {
					path.push(level);
				}
			}

			if (direction === "down" && people < level) {
				if (lift.length < capacity) {
					lift.push(people);
					floorQueue.splice(index, 1);
					index--;
				}

				if (path[path.length - 1] !== level) {
					path.push(level);
				}
			}
		}

		if (direction === "up" && level !== queue.length - 1) {
			level++;
		}

		if (direction === "down" && level !== 0) {
			level--;
		}
		if (queue.length - 1 === level) {
			direction = "down";
		}

		if (queue.every((floor) => floor.length === 0) && lift.length === 0) {
			isQueueEmpty = true;
			if (path[path.length - 1] !== 0) {
				path.push(0);
			}
		}
	}
	return path;
};

const queue = [[], [2], [3, 3, 3], [1], [], [], []];

console.log(theLift(queue, 1));
