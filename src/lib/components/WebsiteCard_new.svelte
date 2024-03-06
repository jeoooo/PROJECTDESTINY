<script>
	import { onMount } from 'svelte';
	import StatusBadge from './StatusBadge.svelte';

	export let url;
	export let logo;
	export let display_url;
	export let website_description;

	let status = 'unknown'; // Default status

	// Function to check the status of a specific website
	async function checkStatusByUrl(url) {
		try {
			const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(url));
			return response.status === 200 ? 'online' : 'experiencing_issues';
		} catch (error) {
			console.error('Error checking status for', url, ':', error);
			return 'error';
		}
	}

	// Fetch the status of the website on component mount
	onMount(async () => {
		status = await checkStatusByUrl(url);
	});
</script>

<div
	class="overflow-hidden bg-white border border-black h-[250px] w-full relative shadow-lg transition ease-in-out hover:scale-105 hover:z-40"
>
	<img
		class="absolute -right-14 h-96 opacity-5"
		src="school_logos/{logo}"
		alt=""
		srcset=""
		style="user-select: none;"
	/>
	<a
		href={url}
		target="_blank"
		class="absolute m-5 top-0 w-fit font-medium text-2xl transition ease-in-out font-ibm-plex-sans hover:text-blue-600"
		>{display_url}</a
	>
	<div class="w-32 h-20 absolute m-5 bottom-0 right-0 font-medium text-xl font-ibm-plex-sans"></div>
	<StatusBadge website_status={status} />
	<div class="absolute m-5 top-[72px] text-[14px] text-justify">{website_description}</div>
</div>
