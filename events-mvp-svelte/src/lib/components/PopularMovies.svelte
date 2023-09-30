<script lang="ts">
	import type { PageData } from '../../routes/$types';
	export let movies: PageData;
	import MovieCard from './MovieCard.svelte';
</script>

<h3 class="px-4">Popular Movies</h3>
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-8">
	{#each movies.popular as movie}
		<MovieCard {movie} />
	{/each}
</div>
