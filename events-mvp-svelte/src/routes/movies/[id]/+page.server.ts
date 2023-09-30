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
		`https://api.themoviedb.org/3/movie/${params.id}?language=en-US&page=1`,
		options
	);
	// console.log(res.json());

	const movieDetails = await res.json();
	if (res.ok) {
		return {
			props: { movieDetails }
		};
	}
}
