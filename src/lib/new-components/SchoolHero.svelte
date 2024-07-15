<script lang="ts">
	export let school_buildings =
		'https://www.davaocity.gov.ph/wp-content/uploads/2019/08/CIO_0183-e1592302052541.jpg';
	export let school_name = 'school_name';
	export let school_description = 'school_buildings';
	export let school_logo = 'https://placehold.co/150x150';
</script>

<section class="relative h-[24rem] dark:bg-gray-900">
	<!-- Image as background -->
	<div class="absolute inset-0">
		<img
			class="w-full h-full object-cover"
			src={school_buildings}
			alt=""
			style="object-position: center top; top: 50px; left: 20px;"
		/>
		<!-- Overlay with reduced opacity -->
		<div class="absolute inset-0 bg-gray-900 opacity-90"></div>
	</div>
	<!-- Text content -->
	<div
		class="relative py-36 px-4 mx-auto max-w-screen-xl flex items-center text-start lg:py-36 lg:px-12"
	>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img class="w-auto h-40 mr-8" src={school_logo} alt="Placeholder Image" />

		<div>
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
			>
				{school_name}
			</h1>
			<h2
				class="mb-4 text-base font-normal tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white"
			>
				{school_description}
			</h2>
		</div>
	</div>
</section>
