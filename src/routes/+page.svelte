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
	<div class="h-96 w-full relative">
		<div class="absolute inset-0 bg-[#172651] opacity-80"></div>
		<img
			class="w-full h-full object-cover"
			src="https://www.davaocity.gov.ph/wp-content/uploads/2019/08/CIO_0183-e1592302052541.jpg"
			alt=""
			srcset=""
			style="object-position: center top; top: 50px; left: 20px;"
		/>
		<div class="absolute inset-0 flex flex-col items-center justify-center">
			<h1 class="text-white text-4xl font-bold">PROJECT DESTINY</h1>

			<h2 class="text-white text-2xl mt-4 py-4">
				<strong>D</strong>avao
				<strong>E</strong>ducational
				<strong>S</strong>ites
				<strong>T</strong>racker
				<strong>I</strong>dentifying
				<strong>N</strong>etwork
				<strong>Y</strong>ield
			</h2>
			<h2 class="text-white text-xl mt-4">Davao City Student Portal Status Page</h2>
		</div>
	</div>

	<div class="flex flex-col items-center">
		<h1 class="text-5xl font-bold mt-8">Select School</h1>
		<div class="w-fit grid grid-cols-3 gap-2 mt-4">
			{#each websites_data as data}
				<a href={data.abbreviation} rel="noopener noreferrer">
					<div
						class="w-[450px] h-60 bg-orange-100 border border-[#172651] flex flex-col items-center justify-center hover:scale-105 transition ease-in-out"
					>
						<img class="h-32 mb-4" src="school_logos/{data.logo}" alt="" srcset="" />
						<span class="text-center">{data.name}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</body>
``
