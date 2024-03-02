<script lang="ts">
	import Hero from '../lib/components/Hero.svelte';
	import WebsiteCardNew from '$lib/components/WebsiteCard_new.svelte';
	import { onMount } from 'svelte';

	interface Website {
		type: string;
		url: string;
		display_url: string;
		website_description: string;
	}

	interface School {
		name: string;
		logo: string;
		acronym: string;
		description: string;
		websites: Website[];
	}

	let schools: School[] = [];

	async function getJSONdata(): Promise<void> {
		try {
			const response = await fetch('/schools.json');
			const data = await response.json();
			schools = data.schools;

			// Define the order of website types
			const order = ['official_website', 'student_portal', 'lms', 'website'];

			// Sort the websites array for each school
			for (let school of schools) {
				school.websites.sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
			}

			// Sort the schools array alphabetically by the name property
			schools.sort((a, b) => a.name.localeCompare(b.name));
			console.log(schools);
		} catch (error) {
			console.error('Error fetching school data:', error);
		}
	}

	async function checkStatus(url: string): Promise<string> {
		try {
			const response: any = await fetch('https://corsproxy.io/?' + url);
			const actualResponse: any = new Response(response.body, {
				status: response.status,
				statusText: response.statusText,
				headers: new Headers(response.headers)
			});

			// Set CORS headers on the server side to avoid security issues
			actualResponse.headers.append('Access-Control-Allow-Origin', url);
			actualResponse.headers.append('Access-Control-Allow-Methods', 'GET');

			console.log('Website checked:', url);
			console.log('Status checked:', actualResponse.status);

			return actualResponse.status === 200 ? 'online' : 'experiencing_issues';
		} catch (error) {
			console.error('Error checking status:', error);
			return 'error';
		}
	}

	onMount(() => {
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
	{#each schools as school, index (index)}
		<div class=" mx-40 mb-5 h-full">
			<div class="flex flex-row h-auto items-center">
				<img class="mx-4 h-32 my-2" src="school_logos/{school.logo}" alt="" srcset="" />
				<div class=" flex flex-col w-full">
					<div class="text-4xl font-bold font-ibm-plex-sans mb-2">
						{school.name}
						{#if school.acronym}
							({school.acronym})
						{/if}
					</div>

					<div class="text-s mb-2 font-ibm-plex-sans font-light text-justify">
						{school.description}
					</div>
				</div>
			</div>
			<div class="grid grid-flow-row grid-cols-3 gap-4 py-2 px-2 mt-4">
				{#each school.websites as website}
					<WebsiteCardNew
						display_url={website.display_url}
						logo={school.logo}
						website_description={website.website_description}
						url={website.url}
						status={checkStatus(website.url)}
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
