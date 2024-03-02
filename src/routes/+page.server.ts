// import type { PageServerLoad } from './$types';
// import fetch from 'node-fetch';

// export const load: PageServerLoad = async () => {
// 	try {
// 		// Fetch schools data from deployed location
// 		const response = await fetch('/static/schools.json');
// 		const { schools }: any = await response.json();

// 		// Initialize statuses object
// 		const statuses: Record<string, string> = {};

// 		// Iterate over schools
// 		for (const school of schools) {
// 			// Iterate over websites within each school
// 			for (const website of school.websites) {
// 				try {
// 					// Check status of each website
// 					const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(website.url)}`);
// 					statuses[website.url] = response.status === 200 ? 'online' : 'experiencing_issues';
// 				} catch (error) {
// 					console.error(`Error checking status for ${website.url}: ${error}`);
// 					statuses[website.url] = 'Error';
// 				}
// 			}
// 		}

// 		// Console table the website and status
// 		console.table(statuses);

// 		return {
// 			websites_data: schools,
// 			website_statuses: statuses
// 		};
// 	} catch (error) {
// 		console.error('Error fetching schools data:', error);
// 		return {
// 			websites_data: [],
// 			website_statuses: {}
// 		};
// 	}
// };
