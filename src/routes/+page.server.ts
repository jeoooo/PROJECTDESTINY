// import type { PageServerLoad } from './$types';
// import 'dotenv/config';
// import fetch from 'node-fetch';
// import { POCKETBASE_LOCAL_INSTANCE, POCKETBASE_PRODUCTION_INSTANCE } from '$env/static/private';

// export const load: PageServerLoad = async () => {
// 	let baseUrl;
// 	if (import.meta.env.MODE === 'production') {
// 		baseUrl = POCKETBASE_PRODUCTION_INSTANCE;
// 	} else {
// 		baseUrl = POCKETBASE_LOCAL_INSTANCE;
// 	}
// 	// check what instance did we use
// 	console.log(`Using base URL: ${baseUrl}`);

// 	const websites_response = await fetch(
// 		`${baseUrl}/api/collections/websites/records?expand=websites&sort=school_name`
// 	);

// 	const websites_data: any = await websites_response.json();

// 	// function getAllWebsites(data: any) {
// 	// 	const allWebsites: any = [];

// 	// 	// Check if data has 'items' property
// 	// 	if (data.items && Array.isArray(data.items)) {
// 	// 		// Iterate through each school
// 	// 		data.items.forEach((school: { websites: any; expand: { websites: any } }) => {
// 	// 			// Check if the school has 'websites' property
// 	// 			if (school.websites && Array.isArray(school.websites)) {
// 	// 				// Iterate through each website in the school
// 	// 				school.websites.forEach((websiteId) => {
// 	// 					// Find the website details using the websiteId
// 	// 					const websiteDetails = school.expand.websites.find((web: any) => web.id === websiteId);

// 	// 					// Check if the website details are found
// 	// 					if (websiteDetails) {
// 	// 						// Add the website URL to the list
// 	// 						allWebsites.push(websiteDetails.url);
// 	// 					}
// 	// 				});
// 	// 			}
// 	// 		});
// 	// 	}

// 	// 	return allWebsites;
// 	// }

// 	// Call the function to get all websites
// 	// const allWebsites = getAllWebsites(websites_data);
// 	// console.log(allWebsites);

// 	// async function checkStatus() {
// 	// 	const statuses: Record<string, string> = {}; // Declare the statuses variable

// 	// 	// check if website/s are up or down
// 	// 	for (let i = 0; i < allWebsites.length; i++) {
// 	// 		try {
// 	// 			const response = await fetch(
// 	// 				'https://corsproxy.io/?' + encodeURIComponent(allWebsites[i]),
// 	// 				{
// 	// 					headers: {
// 	// 						'Access-Control-Allow-Origin': '*',
// 	// 						'Access-Control-Allow-Methods': 'GET',
// 	// 						'Access-Control-Allow-Headers': 'Content-Type'
// 	// 					}
// 	// 				}
// 	// 			);
// 	// 			const actualResponse = new Response(await response.text(), {
// 	// 				// Use await response.text() to get the response body
// 	// 				status: response.status,
// 	// 				statusText: response.statusText,
// 	// 				headers: Object.fromEntries(response.headers) // Convert headers to a plain object
// 	// 			});

// 	// 			statuses[allWebsites[i]] = response.status === 200 ? 'online' : response.status.toString();
// 	// 		} catch (error) {
// 	// 			statuses[allWebsites[i]] = 'Error';
// 	// 		}
// 	// 	}

// 	// 	// Console table the website and status
// 	// 	console.table(statuses);

// 	// 	return statuses;
// 	// }

// 	// checkStatus(); // Call the checkStatus function

// 	return {
// 		websites_data: websites_data.items,
// 		// website_statuses: checkStatus()
// 		BASE_URL: baseUrl
// 	};
// };
