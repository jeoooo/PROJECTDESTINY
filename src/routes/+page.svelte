<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import WebsiteCard from '$lib/components/WebsiteCard.svelte';
	import { onMount } from 'svelte';

	// D.E.S.T.I.N.Y.: Davao Educational Sites Tracker Identifying Network Yield

	export let data;
	const { websites_data, BASE_URL }: any = data;
	// console.log(BASE_URL);

	/**
	 * Fetches JSON data from '/schools.json' and assigns it to the 'schools' variable.
	 * @returns {Promise<void>} A promise that resolves when the JSON data is fetched and assigned.
	 */
	let schools;
	async function getJSONdata() {
		const response = await fetch('/schools.json');
		schools = await response.json();
		console.log(schools);
	}

	// get all website data from JSON
	function getAllWebsitesfromJSON(data: any) {
		const allWebsites: any = [];
	}

	function getAllWebsites(data: any) {
		const allWebsites: any = [];

		// Iterate through each school
		data.forEach((school: { websites: any; expand: { websites: any } }) => {
			// Check if the school has 'websites' property
			if (school.websites && Array.isArray(school.websites)) {
				// Iterate through each website in the school
				school.websites.forEach((websiteId) => {
					// Find the website details using the websiteId
					const websiteDetails = school.expand.websites.find((web: any) => web.id === websiteId);

					// Check if the website details are found
					if (websiteDetails) {
						// Add the website URL to the list
						allWebsites.push(websiteDetails.url);
					}
				});
			}
		});

		return allWebsites;
	}

	// Call the function to get all websites
	const allWebsites = getAllWebsites(websites_data);
	// console.log(allWebsites);

	let statuses: { [key: string]: string } = {};
	allWebsites.forEach((website: string) => {
		statuses[website] = 'Checking...';
	});

	async function checkStatus() {
		// check if website/s are up or down
		for (let i = 0; i < allWebsites.length; i++) {
			try {
				const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(allWebsites[i]));
				const actualResponse = new Response(response.body, {
					status: response.status,
					statusText: response.statusText,
					headers: new Headers(response.headers)
				});

				// Set CORS headers on the server side to avoid security issues
				actualResponse.headers.append('Access-Control-Allow-Origin', allWebsites[i]);

				statuses[allWebsites[i]] = actualResponse.status === 200 ? 'online' : 'experiencing_issues';
			} catch (error) {
				// statuses[allWebsites[i]] = `Error: ${error}`;
			}
			// ssssshhhh
			// console.log(`${allWebsites[i]} : ${statuses[allWebsites[i]]}`);
		}
	}

	onMount(() => {
		checkStatus();
		getJSONdata();
	});
</script>

<svelte:head>
	<meta name="title" content="PROJECT DESTINY" />
	<meta name="description" content="Davao City Student Portal Status Page" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://metatags.io/" />
	<meta property="og:title" content="PROJECT DESTINY" />
	<meta property="og:description" content="Davao City Student Portal Status Page" />
	<meta property="og:image" content="https://i.imgur.com/mVrmeuH.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://metatags.io/" />
	<meta property="twitter:title" content="PROJECT DESTINY" />
	<meta property="twitter:description" content="Davao City Student Portal Status Page" />
	<meta property="twitter:image" content="https://i.imgur.com/mVrmeuH.png" />

	<!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<body class="flex flex-col w-full h-full mb-auto bg-slate-100">
	<Hero />
	<h1 class="text-4xl font-bold font-ibm-plex-sans mb-8 mx-[170px]">Schools</h1>
	<!-- <SearchBar /> -->
	{#each websites_data as data}
		<div class=" mx-40 mb-5 h-full">
			<div class="flex flex-row h-auto items-center">
				<img
					class="mx-4 h-32 my-2"
					src="{BASE_URL}/api/files/{data.collectionId}/{data.id}/{data.logo}"
					alt=""
					srcset=""
				/>
				<div class=" flex flex-col w-full">
					<div class="text-4xl font-bold font-ibm-plex-sans mb-2">
						{data.school_name}
						{#if data.acronym}
							({data.acronym})
						{/if}
					</div>

					<div class="text-s mb-2 font-ibm-plex-sans font-light text-justify">
						{data.school_description}
					</div>
				</div>
			</div>

			<div class="grid grid-flow-row grid-cols-3 gap-4 py-2 px-2 mt-4">
				{#each data.expand.websites as website}
					<WebsiteCard
						baseUrl={BASE_URL}
						id={data.id}
						website_name={website.website_name}
						collectionId={data.collectionId}
						logo={data.logo}
						website_description={website.website_description}
						url={website.url}
						status={statuses[website.url]}
					/>
				{/each}
			</div>
		</div>
	{/each}
	<div class="bg-white mx-[170px] my-20 p-3 border border-black shadow-lg">
		<div class="flex flex-col justify-center items-center p-4">
			<p class="text-center font-bold text-4xl font-ibm-plex-sans my-5">Wanna Contribute?</p>
			<p class=" text-center text-normal font-ibm-plex-sans px-14">
				Help improve and expand <strong>PROJECT DESTINY!</strong> If you would like to add a new
				school/site to our list or suggest edits for existing entries, please fill out the form
				below. <br /> Your contributions are invaluable in keeping DESTINY up-to-date and comprehensive.
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
					href="https://forms.gle/SRDpttRwwoM8Q9BC7"
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
