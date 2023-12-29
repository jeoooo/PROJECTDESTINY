<script>
	// @ts-nocheck
	// D.E.S.T.I.N.Y.: Davao Educational Sites Tracker Identifying Network Yield
	import '../../app.css';

	export let website_status;
</script>

<!-- loading... -->
<div
	class="absolute m-5 top-[36px] bg-yellow-50 text-yellow-800 text-xs px-3 py-1 rounded-3xl w-fit font-normal text-[14px] font-ibm-plex-sans"
>
	<i class="fa-solid fa-signal mr-1"></i> Loading
</div>
{#if website_status == 'online'}
	<div
		class="absolute m-5 top-[36px] bg-green-50 text-green-800 text-xs px-3 py-1 rounded-3xl w-fit font-normal text-[14px] font-ibm-plex-sans"
	>
		<i class="fa-solid fa-signal mr-1"></i> Online
	</div>
{:else}
	<div
		class="absolute m-5 top-[36px] bg-red-50 text-red-800 text-xs px-3 py-1 rounded-3xl w-fit font-normal text-[14px] font-ibm-plex-sans"
	>
		<i class="fa-solid fa-signal mr-1"></i> Experiencing Issues
	</div>
{/if}
