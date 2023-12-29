import type { PageServerLoad } from './$types';
import { POCKETBASE_LOCAL_INSTANCE } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const apiUrl = 'http://worldtimeapi.org/api/timezone/Asia/Manila';
	const schools = `${POCKETBASE_LOCAL_INSTANCE}/api/collections/schools/records?sort=school_name&fields=school_name,acronym`;
	const get_schools = await fetch(schools);
	const get_date = await fetch(apiUrl);

	const websites_data = await get_schools.json();
	const date_data = await get_date.json();

	return {
		schools: websites_data.items,
		date: date_data.datetime
	};
};