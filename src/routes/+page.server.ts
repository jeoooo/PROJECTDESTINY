import type { PageServerLoad } from './$types';
import schoolsData from '../../static/schools.json';

export const load: PageServerLoad = async () => {
	try {
		// Access schools data directly from imported JSON
		const allSchools = schoolsData.schools;

		// Sort schools alphabetically by name
		allSchools.sort((a, b) => a.name.localeCompare(b.name));

		console.log(schoolsData);

		// Initialize an array to store website statuses
		// const websiteStatuses: {
		// 	school_name: string;
		// 	display_url: string;
		// 	url: string;
		// 	status: string;
		// }[] = [];

		// Process the 'websites' array for each school
		// for (const school of allSchools) {
		// 	console.log('School name:', school.name);

		// 	Check status for each website in the school
		// 	for (const website of school.websites) {
		// 		const status = await checkStatus(website.url);
		// 		websiteStatuses.push({
		// 			school_name: school.name,
		// 			display_url: website.display_url,
		// 			url: website.url,
		// 			status
		// 		});
		// 	}
		// }

		// Log the website statuses
		// console.log('Website Statuses:', websiteStatuses);

		return {
			websites_data: allSchools
			// website_statuses: websiteStatuses
		};
	} catch (error) {
		console.error('Error fetching schools data:', error);
		return {
			websites_data: []
			// website_statuses: []
		};
	}
};
