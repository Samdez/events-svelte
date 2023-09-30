<script>
	export let data;
	import SearchMovies from '$lib/components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';
	import PopularMovies from '../lib/components/PopularMovies.svelte';
</script>

<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies movies={data} />
</section>
