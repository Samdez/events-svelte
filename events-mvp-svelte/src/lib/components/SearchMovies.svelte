<script>
	let inputValue = '';
	let active = false;
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import Button from './ui/button/button.svelte';
	import Input from './ui/input/input.svelte';

	function submitSearch() {
		goto(`/search/${inputValue}`);
	}
</script>

<form class="relative w-[30%] m-4 flex" on:submit|preventDefault={submitSearch}>
	{#if !active}
		<label
			for="search_movie"
			class="absolute font-semibold top-2 left-0 pointer-events-none px-4 text-white"
			in:fly={{ y: -10, duration: 500 }}
			out:fly={{ y: -10, duration: 500 }}>Search movie</label
		>
	{/if}
	<Input
		on:blur={() => (active = !!inputValue)}
		on:focus={() => (active = true)}
		bind:value={inputValue}
		type="text"
		name="search_movie"
		class=" font-bold text-white py-2 px-1 transition-all bg-gray-600 rounded-md p-4 {active &&
			'bg-primary'}"
	/>
	<Button disabled={!active} class=" mx-4 cursor-pointer {active ? 'bg-primary' : 'bg-secondary'} "
		>Search</Button
	>
</form>
