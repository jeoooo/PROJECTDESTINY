<script>
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

<body class="flex flex-col w-full h-full mb-auto pb-10">
	<!-- hero -->
	<div class="flex flex-row border border-black bg-white mx-[170px] my-5 p-2 w-fit">
		<div class="flex flex-col items-center justify-center w-full h-full py-16">
			<p class="w-full font-bold text-4xl font-ibm-plex-sans text-center mb-4">Project DESTINY</p>
			<p class="w-full font-ibm-plex-sans text-center">
				<strong>D</strong>avao <strong>E</strong>ducational
				<strong>S</strong>ites <strong>T</strong>racker <strong>I</strong>dentifying
				<strong>N</strong>etwork <strong>Y</strong>ield
			</p>
		</div>
		<div class="w-full h-full p-20 font-ibm-plex-sans indent-10 text-justify">
			<strong>Is your student portal down? Check them here!</strong> Explore DESTINY, your Davao Educational
			Sites Tracker. Ensuring website uptime for seamless learning experiences in Davao City schools.
		</div>
	</div>
	<SearchBar />
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
</body>
