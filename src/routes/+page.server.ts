import type { PageServerLoad } from './$types';
import { LOCAL_INSTANCE } from '$env/static/private';
import fetch from 'node-fetch';

export const load: PageServerLoad = async () => {
	const websites_response = await fetch(
		'http://127.0.0.1:8090/api/collections/websites/records?expand=websites&sort=school_name'
	);

	const websites_data: any = await websites_response.json();

	let websiteStatuses: { [key: string]: string } = {};

	for (let school of websites_data.items) {
		for (let websiteId of school.websites) {
			const website = school.expand.websites.find((site: any) => site.id === websiteId);

			try {
				const encodedUrl = encodeURIComponent(website.url);
				const response = await fetch('https://corsproxy.io/?' + website.url);
				websiteStatuses[website.url] = response.status === 200 ? 'Up' : 'Down';
				console.log(`Website ${website.url} is ${websiteStatuses[website.url]}`);
			} catch (error) {
				console.log('Error:', error);
				websiteStatuses[website.url] = 'Error';
			}
		}
	}

	let websiteStatusesArray = Object.keys(websiteStatuses).map((website) => ({
		websites: website,
		status: websiteStatuses[website]
	}));

	console.table(websiteStatusesArray);

	return {
		websites_data: websites_data.items
	};
};
