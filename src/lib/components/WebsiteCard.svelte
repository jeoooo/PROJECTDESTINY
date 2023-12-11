<script>
	import StatusBadge from './StatusBadge.svelte';

	// @ts-nocheck
	// D.E.S.T.I.N.Y.: Davao Educational Sites Tracker Identifying Network Yield
	import '../../app.css';
	import Lineplot from '$lib/components/Lineplot.svelte'; // TODO : D3.js uptime data visualization
	export let collectionId = 'collectionId';
	export let id = 'id';
	export let logo = 'logo';
	export let url = 'url';
	export let website_name = 'website_name';
	export let website_description = 'website_description';
</script>

<div
	class="overflow-hidden bg-white border border-black h-[250px] w-full relative shadow-lg transition ease-in-out hover:scale-105 hover:z-40"
>
	<img
		class="absolute -right-14 h-96 opacity-5"
		src="http://127.0.0.1:8090/api/files/{collectionId}/{id}/{logo}"
		alt=""
		srcset=""
		style=""
	/>
	<a
		href={url}
		target="_blank"
		class="absolute m-5 top-0 w-fit font-medium text-2xl transition ease-in-out font-ibm-plex-sans hover:text-blue-600"
	>
		{website_name}
	</a>
	<div class="w-32 h-20 absolute m-5 bottom-0 right-0 font-medium text-xl font-ibm-plex-sans">
		<!-- Lineplot {data} width={140} height={90} -->
	</div>
	<StatusBadge />
	<div class="absolute m-5 top-[72px] text-[14px] text-justify">
		{website_description}
	</div>

	<!-- <a
							href={website.url}
							target="_blank"
							class="absolute transition ease-in-out mx-5 my-6 bottom-0 w-fit font-ibm-plex-sans hover:text-blue-600 hover:underline hover:underline-offset-4"
						>
							Visit Site <i class="fa-solid fa-arrow-right ml-2 h-4"></i>
						</a> -->
</div>
