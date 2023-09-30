<script>
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="w-full">
		<img
			src={`https://image.tmdb.org/t/p/original${data.props?.movieDetails.backdrop_path}`}
			alt=""
			class="w-full rounded-md"
		/>
	</div>
	<div class="my-8 mx-[20%]">
		<h1 class="pt-4 pb-8">{data.props?.movieDetails.title}</h1>
		<p class="py-4">{data.props?.movieDetails.overview}</p>
		<p class="py-4">
			<span class="font-bold">Release Date: </span>
			{data.props?.movieDetails.release_date}
			<br />
			<span class="font-bold">Budget: </span>
			$ {data.props?.movieDetails.budget}
			<br />
			<span class="font-bold">BudgeRating: </span>
			{data.props?.movieDetails.vote_average}
			<br />
			<span class="font-bold">Runtime: </span>
			{data.props?.movieDetails.runtime}mins
			<br />
		</p>
	</div>
</div>
