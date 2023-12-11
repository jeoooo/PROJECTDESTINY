<script>
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
					<!-- <div
						class="overflow-hidden bg-white border border-black h-[250px] w-full relative shadow-lg transition ease-in-out hover:scale-105 hover:z-40"
					>
						<img
							class="absolute -right-14 h-96 opacity-5"
							src="http://127.0.0.1:8090/api/files/{data.collectionId}/{data.id}/{data.logo}"
							alt=""
							srcset=""
							style=""
						/>
						<a
							href={website.url}
							target="_blank"
							class="absolute m-5 top-0 w-fit font-medium text-2xl transition ease-in-out font-ibm-plex-sans hover:text-blue-600"
						>
							{website.website_name}
						</a>
						<div
							class="w-32 h-20 absolute m-5 bottom-0 right-0 font-medium text-xl font-ibm-plex-sans"
						>
							
						</div>
						<div
							class="absolute m-5 top-[36px] bg-green-50 text-green-800 text-xs px-3 py-1 rounded-3xl w-fit font-normal text-[14px] font-ibm-plex-sans"
						>
							<i class="fa-solid fa-signal mr-1"></i> Online
						</div>
						<div class="absolute m-5 top-[72px] text-[14px] text-justify">
							{website.website_description}
						</div>

					</div> -->
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
