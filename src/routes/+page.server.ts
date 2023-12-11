import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const websites_response = await fetch(
		'http://127.0.0.1:8090/api/collections/websites/records?expand=websites&sort=school_name'
	);

	const websites_data = await websites_response.json();

	return {
		websites_data: websites_data.items
	};
};
