<script lang="ts">
	import Header from '../lib/components/Header.svelte';

	import Footer from '../lib/components/Footer.svelte';

	import type { LayoutData } from './$types';
	import '../app.css';
	// export let data: LayoutData;
</script>

<Header />
<slot />

<Footer />
