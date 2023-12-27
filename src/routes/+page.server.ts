import type { PageServerLoad } from './$types';
import 'dotenv/config';
import fetch from 'node-fetch';

export const load: PageServerLoad = async () => {
	const baseUrl =
		process.env.NODE_ENV === 'production'
			? process.env.PRODUCTION_INSTANCE
			: process.env.LOCAL_INSTANCE;

	// check what instance did we use
	console.log(`Using base URL: ${baseUrl}`);

	const websites_response = await fetch(
		`${baseUrl}collections/websites/records?expand=websites&sort=school_name`
	);

	const websites_data: any = await websites_response.json();

	// function getAllWebsites(data: any) {
	// 	const allWebsites: any = [];

	// 	// Check if data has 'items' property
	// 	if (data.items && Array.isArray(data.items)) {
	// 		// Iterate through each school
	// 		data.items.forEach((school: { websites: any; expand: { websites: any } }) => {
	// 			// Check if the school has 'websites' property
	// 			if (school.websites && Array.isArray(school.websites)) {
	// 				// Iterate through each website in the school
	// 				school.websites.forEach((websiteId) => {
	// 					// Find the website details using the websiteId
	// 					const websiteDetails = school.expand.websites.find((web: any) => web.id === websiteId);

	// 					// Check if the website details are found
	// 					if (websiteDetails) {
	// 						// Add the website URL to the list
	// 						allWebsites.push(websiteDetails.url);
	// 					}
	// 				});
	// 			}
	// 		});
	// 	}

	// 	return allWebsites;
	// }

	// // Call the function to get all websites
	// const allWebsites = getAllWebsites(websites_data);
	// console.log(allWebsites);

	return {
		websites_data: websites_data.items
	};
};
