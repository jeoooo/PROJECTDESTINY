<!-- 
	⣿⣿⣿⠿⠛⠉⢉⣀⡀⠀⠉⠉⠛⠿⣿⣿⣿
	⣿⡿⠁⠀⣴⣾⣿⣿⣿⣿⣦⡀⠀⠀⠈⠻⣿
	⣿⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀ ⢻
	⣧⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀ ⢸
	⣿⣆⡀⠀⣠⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⣸
	⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⣠⣿
	⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢀⣴⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⣠⣾⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⢀⣾⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⣿⠁⢰⣿⣿⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⡏⠀⣿⣿⣿⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⣧⣴⣿⣿⣿⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿
	⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿

	FAQ
	1. What is Project DESTINY?
	2. How does the website tracker work?
	3. Which schools in Davao City are included in the tracker?
	4. Can I rely on the information provided by the tracker?
	5. Is the website tracker accessible on mobile devices?
	6. How can I report issues or inaccuracies with the uptime data?
	7. Is the service free to use?
	8. Can I get notifications for downtime events?
	9. How can I support or contribute to the uptime tracker?
	10. Are there any privacy concerns with using the uptime tracker?
 -->

<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';
	import { onMount } from 'svelte';

	export let data;
	const { schools, date } = data;
	console.log(date);
	console.log(schools);
</script>

<body class="flex flex-col w-full h-full mb-auto bg-slate-100">
	<div class=" bg-[#172651] mb-8 pb-6">
		<h1
			class="text-white flex flex-row font-ibm-plex-sans font-normal mx-[350px] my-2 w-fit text-8xl mt-20"
		>
			FAQ
		</h1>
		<h4
			class="text-white flex flex-row font-ibm-plex-sans font-normal mx-[350px] mt-8 w-fit text-xl"
		>
			<strong>F</strong>requently &nbsp; <strong>A</strong>sked &nbsp; <strong>Q</strong>uestions
		</h4>
	</div>

	<!-- <hr class="mx-[300px] border-black my-4 mt-2" /> -->
	<!-- <h1 class="mx-[350px] my-2 text-2xl font-ibm-plex-sans font-base">
		<i class="fa-solid fa-arrow-right mr-2"></i>What is Project DESTINY?
	</h1>
	<h1 class="mx-[350px] my-2 text-2xl font-ibm-plex-sans font-base">
		<i class="fa-solid fa-arrow-right mr-2"></i>What is Project DESTINY?
	</h1>
	<h1 class="mx-[350px] my-2 text-2xl font-ibm-plex-sans font-base">
		<i class="fa-solid fa-arrow-right mr-2"></i>What is Project DESTINY?
	</h1> -->

	<h1 class="mx-[350px] mt-8 mb-4 text-4xl font-ibm-plex-sans font-normal">
		About Project DESTINY
	</h1>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">What's this?</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		<strong>Project DESTINY</strong> serves as a centralized directory for checking the uptime of websites
		and student portals of various educational institutions, offering a convenient and single point of
		access for users across Davao City. Its main goal is to provide a centralized directory for educators
		and students to check if their school's website is up.
	</p>

	<p class="mx-[350px] pl-10 my-4 text-base text-justify font-ibm-plex-sans font-normal">
		<strong>DESTINY</strong> stands for
		<br />
		<strong>D</strong>avao <br />
		<strong>E</strong>ducational
		<br /><strong>S</strong>ites <br />
		<strong>T</strong>racker <br />
		<strong>I</strong>dentifying <br />
		<strong>N</strong>etwork <br />
		<strong>Y</strong>ield
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">
		How does the website tracker work?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		The website tracker uses a
		<a
			class="text-blue-600 hover:underline-offset-2 hover:underline"
			href="https://rapidapi.com/guides/cors-proxy-apis#what-is-cors-proxy"
			target="_blank"
			rel="noopener noreferrer"
			>CORS proxy
		</a>
		to verify the functionality of school websites. This proxy acts like a messenger, checking if the
		websites are open. If the response is positive, it means the website is working. However, if there's
		a problem , the website is experiencing issues. Essentially, the CORS proxy functions as an efficient
		assistant, promptly notifying users about the accessibility of their school's online resources.
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">
		Which schools in Davao City are included in the tracker?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		{#if date}
			As of {formatDate(date)} The following schools included in the tracker are the following
		{:else}
			As of {formatDate(new Date().toISOString())} The following schools included in the tracker are
			the following
		{/if}
	</p>
	<ol class="mx-[350px] my-4 list-disc pl-10 text-base text-justify font-ibm-plex-sans font-normal">
		{#each schools as { acronym, school_name }}
			<li>{school_name} ({acronym})</li>
		{/each}
	</ol>

	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">
		Can I rely on the information provided by the tracker?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		Absolutely. The website tracker not only monitors the uptime of various student portals and
		school websites but also provides direct links to each website. This feature allows users to
		double-check the information by visiting the websites themselves. The transparency in offering
		direct links enhances the reliability of the tracker, enabling users to independently verify the
		status of their school's online platforms and ensuring accurate and up-to-date information.
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">
		Is the website tracker accessible on mobile devices?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		Yes, the website tracker is accessible on mobile devices. However, ongoing improvements are in
		progress to enhance user experience further. The development efforts include making the website
		a Progressive Web App (PWA) and optimizing it to be more mobile-friendly. These enhancements aim
		to provide users with a seamless and responsive experience while accessing the tracker on
		various mobile devices, ensuring ease of use and accessibility on the go.
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">
		How can I report issues or inaccuracies with the uptime data?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		You may fill up this
		<a
			href="https://forms.gle/SRDpttRwwoM8Q9BC7"
			target="_blank"
			rel="noopener noreferrer"
			class="text-blue-600 hover:underline-offset-2 hover:underline"
		>
			Google form
		</a>
		or you may submit a

		<a
			href="https://github.com/jeoooo/PROJECTDESTINY/issues"
			target="_blank"
			rel="noopener noreferrer"
			class="text-blue-600 hover:underline-offset-2 hover:underline"
		>
			GitHub issue here
			<i class="fa-brands fa-github ml-1"></i>
		</a>
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">Is the service free to use?</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">Yes</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-base">
		Can I get notifications for downtime events?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal">
		Not yet, but the feature is being considered for future development. Stay tuned for updates on
		potential notification capabilities.
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-normal">
		How can I support or contribute to the uptime tracker?
	</h1>
	<p class="mx-[350px] my-4">
		See
		<a
			href="https://github.com/jeoooo/PROJECTDESTINY"
			target="_blank"
			rel="noopener noreferrer"
			class="text-blue-600 hover:underline-offset-2 hover:underline"
		>
			GitHub Repository
			<i class="fa-brands fa-github ml-1"></i>
		</a>
	</p>
	<h1 class="mx-[350px] my-4 text-3xl font-ibm-plex-sans font-normal">
		Are there any privacy concerns with using the uptime tracker?
	</h1>
	<p class="mx-[350px] my-4 text-base text-justify font-ibm-plex-sans font-normal mb-20">
		There are no privacy concerns associated with using this uptime tracker. <br /><br />
		It's important to note that all logos and school seals displayed on the tracker belong to their respective
		schools, and the tracker respects and acknowledges their ownership.
	</p>
</body>
>
