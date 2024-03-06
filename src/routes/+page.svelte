<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import WebsiteCardNew from '$lib/components/WebsiteCard_new.svelte';
	import { onMount } from 'svelte';

	export let data: {
		websites_data: any[];
	};

	// Extract websites_data from the data object
	const { websites_data } = data;

	// Function to check the status of all websites
	async function checkStatus() {
		try {
			// Iterate over each school object
			for (const school of websites_data) {
				// Iterate over each website within the school
				for (const website of school.websites) {
					let url = website.url;

					const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(url));
					const status = response.status === 200 ? 'online' : 'experiencing_issues';
					console.log(`${url}: ${status}`);
				}
			}
		} catch (error) {
			console.error('Error checking status:', error);
		}
	}

	// Call the checkStatus function when the component is mounted
	onMount(() => {
		checkStatus();
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
	{#each websites_data as data}
		<div class=" mx-40 mb-5 h-full">
			<div class="flex flex-row h-auto items-center">
				<img class="mx-4 h-32 my-2" src="school_logos/{data.logo}" alt="" srcset="" />
				<div class=" flex flex-col w-full">
					<div class="text-4xl font-bold font-ibm-plex-sans mb-2">{data.name}</div>

					<div class="text-s mb-2 font-ibm-plex-sans font-light text-justify">
						{data.description}
					</div>
				</div>
			</div>

			<div class="grid grid-flow-row grid-cols-3 gap-4 py-2 px-2 mt-4">
				{#each data.websites as website}
					<WebsiteCardNew
						display_url={website.display_url}
						logo={'data.logo'}
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
