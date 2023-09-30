import { TMDB_ACCESS_TOKEN } from '$env/static/private';

export async function load({ params }) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
		}
	};

	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?language=en-US&query=${params.id}&page=1&include_adult=false`,
		options
	);
	const data = await res.json();
	if (res.ok) {
		return {
			searchedMovie: data.results
		};
	}
}
