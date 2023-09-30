<script lang="ts">
	import type { Movie } from '../../types';

	export let movie: Movie;
</script>

<div class="flex flex-col justify-around p-4 overflow-hidden">
	<a data-sveltekit-preload-data href={`/movies/${movie.id}`}>
		<img
			class="w-full h-[30vh] object-cover rounded-2xl border-b-4 hover:scale-105 ease-in duration-100"
			src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
			alt={movie.title}
		/>
	</a>
	<div class="h-[5vh]">
		<h2 class="text-base">{movie.title}</h2>
		<p class="text-sm">{movie.release_date}</p>
	</div>
</div>
