<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<div class="flex justify-center items-center h-screen">
	<div class="text-center m-10 bg-white p-12">
		<h1 class="text-[250px] text-[#172651] font-ibm-plex-sans font-bold">{$page.status}</h1>
		<h1 class="text-normal text-[#172651] font-ibm-plex-sans">Page {$page.error?.message}</h1>
		<p class="my-4 text-normal text-[#172651] font-ibm-plex-sans">
			{#if $page.status === 404}
				Oops! The page you're looking for doesn't exist. It seems there's a problem with the
				information you provided.
			{:else}
				Oops! Something went wrong with your request. It seems there's a problem with the
				information you provided.
			{/if}
			<br /> Please double-check and try again. If the issue persists, contact our support team for assistance.
		</p>
		<div class="flex flex-row justify-center items-center w-full">
			<a
				href="/"
				rel="noopener noreferrer"
				class="flex w-[250px] mx-2 transition ease-in-out my-5 bg-[#172651] text-white pl-5 py-3 font font-ibm-plex-sans border border-[#172651] hover:text-[#172651] hover:bg-white"
			>
				Back to home
				<i class="fa-solid fa-house pl-20 py-1"></i>
			</a>
		</div>
	</div>
</div>
