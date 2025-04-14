/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
import { getRandomJoke } from "../lib/joke.js";

router.get("/", async () => {
	let status = 200;
	const joke = getRandomJoke();

	if (!joke) {
		status = 404;
	}

	return {
		joke,
		status,
	};
});
