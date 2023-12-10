import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const schools_response = await fetch('http://127.0.0.1:8090/api/collections/schools/records');
	const websites_response = await fetch('http://127.0.0.1:8090/api/collections/websites/records');
	const schools_data = await schools_response.json();
	const websites_data = await websites_response.json();

	const acronyms: string[] = schools_data.items.map((item: any) => item.acronym).sort();
	const school_name: string[] = schools_data.items.map((item: any) => item.school_name);
	const school_description: string[] = schools_data.items.map(
		(item: any) => item.school_description
	);
	const logo: string[] = schools_data.items.map((item: any) => item.logo);

	return {
		schools_data: schools_data.items,
		websites_data: websites_data.items
	};
};
