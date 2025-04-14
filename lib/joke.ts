import * as jokes from "../jokes.json" with { type: "json" };

export function getRandomJoke(): string {
	const index = Math.floor(Math.random() * jokes.default.length);
	return jokes.default[index];
}
