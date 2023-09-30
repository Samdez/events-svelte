<script>
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let data;
</script>

<div class=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-8 ]">
	{#each data.searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>
