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
	const { websites } = data.props;

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
			class="w-full h-full object-cover"
			src="https://www.davaocity.gov.ph/wp-content/uploads/2019/08/CIO_0183-e1592302052541.jpg"
			alt=""
			srcset=""
			style="object-position: center top; bottom: 20px; left: 20px;"
		/>

		<div class="absolute top-[200px] left-[320px] bg-white">
			<img src="/school_logos/addu.png" class="h-40 p-4" alt="" srcset="" />
		</div>
	</div>
	<div class=" w-auto h-fit flex flex-col justify-center items-center mx-32">
		<div class="flex flex-row w-full mx-80 my-5 p-4 border border-black">
			<div class="flex flex-row">
				<div class="flex flex-col">
					<div class="flex flex-row mr-4">
						<p>uic.edu.ph</p>
						<p>https://uic.edu.ph</p>
					</div>
					<p>test</p>
					<p>
						The University of the Immaculate Conception is a private Catholic basic and higher
						education institution administered by the Religious of the Virgin Mary in Davao City,
						Davao del Sur, Philippines.
					</p>
				</div>

				<div class="flex justify-center items-center">Online</div>
			</div>
		</div>
	</div>
</body>
