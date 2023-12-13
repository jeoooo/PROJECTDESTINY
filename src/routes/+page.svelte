<script>
	import Hero from '../lib/components/Hero.svelte';

	import SearchBar from '$lib/components/SearchBar.svelte';

	import WebsiteCard from '$lib/components/WebsiteCard.svelte';

	// @ts-nocheck
	// D.E.S.T.I.N.Y.: Davao Educational Sites Tracker Identifying Network Yield
	import '../app.css';

	export let data;
	const { websites_data } = data;
	console.log(websites_data);
	let hovereffect = 'grayscale hover:grayscale-0 transition ease-in-out'; // test
</script>

<body class="flex flex-col w-full h-full mb-auto bg-slate-100">
	<Hero />
	<h1 class="text-4xl font-bold font-ibm-plex-sans mb-8 mx-[170px]">Schools</h1>
	<!-- <SearchBar /> -->
	{#each websites_data as data}
		<div class=" mx-40 mb-5 h-full">
			<div class="flex flex-row h-auto items-center">
				<img
					class="mx-4 h-32 my-2"
					src="http://127.0.0.1:8090/api/files/{data.collectionId}/{data.id}/{data.logo}"
					alt=""
					srcset=""
				/>
				<div class=" flex flex-col w-full">
					<div class="text-4xl font-bold font-ibm-plex-sans mb-2">
						{data.school_name}
						({data.acronym})
					</div>

					<div class="text-s mb-2 font-ibm-plex-sans font-light text-justify">
						{data.school_description}
					</div>
				</div>
			</div>

			<div class="grid grid-flow-row grid-cols-3 gap-4 py-2 px-2 mt-4">
				{#each data.expand.websites as website}
					<WebsiteCard
						id={data.id}
						website_name={website.website_name}
						collectionId={data.collectionId}
						logo={data.logo}
						website_description={website.website_description}
						url={website.url}
					/>
				{/each}
			</div>
		</div>
	{/each}
	<div class="bg-white mx-[170px] my-20 p-3 border border-black shadow-lg">
		<div class="flex flex-col justify-center items-center p-4">
			<p class="text-center font-bold text-4xl font-ibm-plex-sans my-5">Wanna Contribute?</p>
			<p class=" text-center text-lg font-ibm-plex-sans">
				Help us improve and expand our educational site tracker! If you would like to add a new
				school/site to our list or suggest edits for existing entries, please fill out the form
				below. Your contributions are invaluable in keeping DESTINY up-to-date and comprehensive.
			</p>
			<div class="flex flex-row justify-center items-center w-full">
				<a
					href="https://github.com/jeoooo/PROJECTDESTINY"
					target="_blank"
					rel="noopener noreferrer"
					class=" flex w-[250px] mx-2 transition ease-in-out my-5 bg-slate-100 pl-5 py-3 font font-ibm-plex-sans border border-black hover:text-white hover:bg-black"
				>
					GitHub Repository
					<i class="fa-brands fa-github pl-14 py-1"></i>
				</a>
				<a
					href="https://github.com/jeoooo/PROJECTDESTINY"
					target="_blank"
					rel="noopener noreferrer"
					class=" flex w-[250px] mx-2 transition ease-in-out my-5 bg-slate-100 pl-5 py-3 font font-ibm-plex-sans border border-black hover:text-white hover:bg-black"
				>
					Suggest Edits
					<i class="fa-solid fa-pen-to-square pl-[90px] py-1"></i>
				</a>
			</div>
		</div>
	</div>
</body>
