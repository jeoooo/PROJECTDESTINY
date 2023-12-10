<script>
	// @ts-nocheck
	// D.E.S.T.I.N.Y.: Davao Educational Sites Tracker Identifying Network Yield
	import '../app.css';
	import Lineplot from '$lib/components/Lineplot.svelte';

	export let data;
	const { schools_data, websites_data } = data;
	console.log(websites_data);
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

	{#each schools_data as data}
		<div class="mx-40 mb-5 h-full">
			<div class="text-4xl font-bold pt-4 pl-4 font-ibm-plex-sans mb-2">{data.school_name}</div>

			<div class="text-s px-4 mb-2 font-ibm-plex-sans font-light text-justify">
				{data.school_description}
			</div>

			<div class="grid grid-flow-row grid-cols-3 gap-4 py-2 px-2">
				<div
					class="bg-white border border-black h-[250px] w-full relative shadow-lg transition ease-in-out hover:scale-105 hover:z-40"
				>
					<div class="absolute m-5 top-0 w-fit font-medium text-2xl font-ibm-plex-sans">
						website_name
					</div>
					<div
						class="w-32 h-20 absolute m-5 bottom-0 right-0 font-medium text-xl font-ibm-plex-sans"
					>
						<!-- Lineplot {data} width={140} height={90} -->
					</div>
					<div
						class="absolute m-5 top-[36px] bg-green-50 text-green-800 text-xs px-3 py-1 rounded-3xl w-fit font-normal text-[14px] font-ibm-plex-sans"
					>
						<i class="fa-solid fa-signal mr-1"></i> Online
					</div>
					<div class="absolute m-5 top-[72px] w-[250px] text-[14px] text-justify">
						website_description
					</div>
					<a
						href="#link"
						target="_blank"
						class="absolute transition ease-in-out mx-5 my-6 bottom-0 w-fit font-ibm-plex-sans hover:text-blue-600 hover:underline hover:underline-offset-4"
					>
						Visit Site <i class="fa-solid fa-arrow-right ml-2 h-4"></i>
					</a>
				</div>
			</div>
		</div>
	{/each}
</body>

<!-- {#each data.items as { id, logo, school_name, collectionId }}
	{#if logo}
		
		<img
			class="w-[100px] grayscale hover:grayscale-0 transition ease-in-out"
			src={`http://127.0.0.1:8090/api/files/${collectionId}/${id}/${logo}`}
			alt={`Logo for ${school_name}`}
		/>
	{/if}
{/each} -->

<!-- <div
	class="bg-white border border-black h-[250px] w-full relative shadow-lg transition ease-in-out hover:scale-105 hover:z-40"
>
	<div class=" absolute m-5 top-0 w-fit font-medium text-2xl font-ibm-plex-sans">website_name</div>
	<div class="w-32 h-20 absolute m-5 bottom-0 right-0 font-medium text-xl font-ibm-plex-sans">
		 <Lineplot {secondData} width={140} height={90} />
	</div>
	<div
		class="absolute m-5 top-[36px] bg-red-50 text-red-800 text-xs px-3 py-1 rounded-3xl w-fit font-normal text-[14px] font-ibm-plex-sans"
	>
		<i class="fa-solid fa-signal mr-1"></i> Experiencing Issues
	</div>
	<div class="absolute m-5 top-[72px] w-[250px] text-[14px] text-justify">website_description</div>
	<a
		href="#link"
		target="_blank"
		class="absolute transition ease-in-out mx-5 my-6 bottom-0 w-fit font-ibm-plex-sans hover:text-blue-600 hover:underline hover:underline-offset-4"
	>
		Visit Site <i class="fa-solid fa-arrow-right ml-2 h-4"></i>
	</a>
</div> -->
