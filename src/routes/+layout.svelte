<script lang="ts">
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>PROJECT DESTINY</title>

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
{#if $page.status == 200}
	<Header />
	<slot />
	<Footer />
{:else}
	<div class="bg-[#172651]">
		<slot />
	</div>
{/if}
