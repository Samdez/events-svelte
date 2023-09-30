import { TMDB_ACCESS_TOKEN } from '$env/static/private';

export async function load() {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
		}
	};

	const res = await fetch(
		'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
		options
	);
	const data = await res.json();
	if (res.ok) {
		return {
			popular: data.results
		};
	}
}
