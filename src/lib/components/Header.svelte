<script lang="ts">
	import Footer from './Footer.svelte';

	import type { LayoutData } from '../../routes/$types';

	// export let data: LayoutData;
</script>

<nav class="w-fill h-12 bg-[#172651]">
	<div class="w-fill h-full mx-40">
		<div class="flex flex-row w-fit h-full p">
			<a href="/" class=" border-r-2 my-2 text-white font-ibm-plex-sans">
				<p class="w-max px-6 py-[4px]">Project DESTINY</p>
			</a>
			<a
				href="faq"
				class="ml-1 w-full px-5 py-[10px] font-ibm-plex-sans text-white hover:text-black transition ease-in-out hover:bg-white"
			>
				FAQ
			</a>
			<!-- <a
				href="#home"
				class="ml-1 w-full px-5 py-[10px] font-ibm-plex-sans text-white hover:text-black transition ease-in-out hover:bg-white"
			>
				About
			</a> -->
		</div>
	</div>
</nav>
