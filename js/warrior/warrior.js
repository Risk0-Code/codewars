class Warrior {
	#achievements;
	#experience;
	constructor() {
		this.#achievements = [];
		this.#experience = 100;
	}
	static ranks = [
		"Pushover",
		"Novice",
		"Fighter",
		"Warrior",
		"Veteran",
		"Sage",
		"Elite",
		"Conqueror",
		"Champion",
		"Master",
		"Greatest",
	];

	level() {
		return Math.floor(this.#experience / 100);
	}

	rank() {
		return Warrior.ranks[Math.floor(this.level() / 10)];
	}
	achievements() {
		return this.#achievements;
	}
	experience() {
		return this.#experience;
	}
	training(array) {
		if (array[2] <= this.level()) {
			this.#achievements.push(array[0]);
			this.#experience += array[1];
			this.#experience = Math.min(this.#experience, 10000);
			return array[0];
		}
		return "Not strong enough";
	}
	battle(level) {
		if (level < 1 || level > 100) {
			return "Invalid level";
		}
		if (
			level >= this.level() + 5 &&
			Math.floor(level / 10) > Math.floor(this.level() / 10)
		) {
			return "You've been defeated";
		}

		if (level === this.level()) {
			this.#experience += 10;
			this.#experience = Math.min(this.#experience, 10000);

			return "A good fight";
		}
		if (level === this.level() - 1) {
			this.#experience += 5;
			this.#experience = Math.min(this.#experience, 10000);

			return "A good fight";
		}
		if (level <= this.level() - 2) {
			this.#experience += 0;
			this.#experience = Math.min(this.#experience, 10000);

			return "Easy fight";
		}
		if (level > this.level()) {
			this.#experience += 20 * (this.level() - level) * (this.level() - level);
			this.#experience = Math.min(this.#experience, 10000);

			return "An intense fight";
		}
	}
}

const goku = new Warrior();
goku.training(["coool", 9899, 1]);
console.log(goku.experience());
console.log(goku.rank());
console.log(goku.achievements());
