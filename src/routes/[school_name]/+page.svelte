<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	// Extract the school name from the page parameters
	const school = $page.params.school_name;

	// Initialize websites_data with an empty array
	export let data: any = {
		websites_data: []
	};

	// Extract the websites array from the props object
	const { websites, foundSchool } = data.props;

	// Update the data object
	data = {
		...data,
		websites,
		foundSchool
	};

	// console.log(websites);
	// Iterate over each website object in the websites array
	for (const website of websites) {
		// Log the URL of each website
		// console.log(website.url);
	}

	// Function to check the status of all websites
	async function checkStatus() {
		try {
			// Iterate over each website within the school
			for (const website of websites) {
				let url = website.url;

				const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(url));
				const status = response.status === 200 ? 'online' : 'experiencing_issues';
				console.log(`${url}: ${status}`);
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

<body class="flex flex-col w-full h-full mb-auto bg-slate-100">
	<div class="h-96 w-full relative flex items-center justify-center">
		<div class="absolute inset-0 bg-[#172651] opacity-80"></div>
		<img
			class="w-full h-full object-cover select-none"
			src="/school_buildings/{school}.png"
			alt=""
			srcset=""
			style="object-position: center top; bottom: 20px; left: 20px;"
		/>

		<div class="absolute top-[200px] left-[320px] mr-32">
			<div class="flex flex-row">
				<img
					src={`/school_logos/${data.foundSchool.logo}`}
					class="h-40 w-auto p-4 select-none bg-white mr-4"
					alt=""
					srcset=""
				/>
				<div class="flex flex-col w-[1000px]">
					<p class="text-white text-4xl font-bold mb-14">{data.foundSchool.name}</p>
					<p class="-mt-4 text-white">{data.foundSchool.description}</p>
				</div>
			</div>
		</div>
	</div>
	<div class=" w-auto h-fit flex flex-col justify-center items-center mx-80">
		{#each data.foundSchool.websites as website}
			<div class="flex flex-row w-full mx-80 my-5 p-4 border border-black">
				<a href={website.url} target="_blank" rel="noopener noreferrer">
					<div class="flex flex-row">
						<div class="flex flex-col">
							<div class="flex flex-row mr-4">
								<h1 class="text-4xl mt-2">{website.display_url}</h1>
								<div class="h-fit ml-4 relative inline-flex top-[20px]">
									<p>Online</p>
									<div class="relative rounded-full h-2 w-2 bg-green-500 top-[10px] ml-2"></div>
								</div>
							</div>
							<div class="my-4">badges</div>
							<div>
								{website.website_description}
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</body>
