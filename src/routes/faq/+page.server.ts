import type { PageServerLoad } from './$types';
import { POCKETBASE_LOCAL_INSTANCE, POCKETBASE_PRODUCTION_INSTANCE } from '$env/static/private';

export const load: PageServerLoad = async () => {
	let baseUrl;
	if (import.meta.env.MODE === 'production') {
		baseUrl = POCKETBASE_PRODUCTION_INSTANCE;
	} else {
		baseUrl = POCKETBASE_LOCAL_INSTANCE;
	}
	const apiUrl = 'http://worldtimeapi.org/api/timezone/Asia/Manila';
	const schools = `${baseUrl}/api/collections/schools/records?sort=school_name&fields=school_name,acronym`;
	const get_schools = await fetch(schools);
	const get_date = await fetch(apiUrl);

	const websites_data = await get_schools.json();
	const date_data = await get_date.json();

	return {
		schools: websites_data.items,
		date: date_data.datetime
	};
};
