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
<!-- {#if $page.status == 200}
	<Header />
	<slot />
	<Footer />
{:else}
	<div class="bg-[#172651]">
		<slot />
	</div>
{/if} -->

<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>Project DESTINY</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-multi-level"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-multi-level"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
			<ul
				class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				<li>
					<a
						href="#home"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="#faq"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
						aria-current="page">FAQ</a
					>
				</li>
				<li>
					<a
						href="#contact"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
						aria-current="page">Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
<slot />
<footer
	class=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
>
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<a
				href="https://flowbite.com/"
				class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
			>
				<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Flowbite</span
				>
			</a>
			<ul
				class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<li>
					<a href="#" class="hover:underline me-4 md:me-6">About</a>
				</li>
				<li>
					<a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
				</li>
				<li>
					<a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
				</li>
				<li>
					<a href="#" class="hover:underline">Contact</a>
				</li>
			</ul>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights
			Reserved.</span
		>
	</div>
</footer>
