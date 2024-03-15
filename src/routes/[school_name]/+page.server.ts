import schoolsData from '../../../static/schools.json';

/**
 * Loads the data for a specific school based on the provided parameters.
 * @param {Object} params - The parameters object containing the school_name.
 * @returns {Promise<Object>} - A promise that resolves to an object containing the websites of the found school.
 */
export const load = async ({ params }) => {
	try {
		// Access schools data directly from imported JSON
		const allSchools = schoolsData.schools;

		// Extract the school_name from params
		const { school_name } = params;

		// Search for the school with matching school_name
		const foundSchool = allSchools.find(
			(school) => school.abbreviation.toLowerCase() === school_name.toLowerCase()
		);

		if (foundSchool) {
			// school data
			// console.log('Found School:', foundSchool);
			// Extract websites from the found school
			const { websites } = foundSchool;

			// Return the websites along with other props

			console.log('Found websites:', websites);

			return {
				props: {
					websites,
					foundSchool
				}
			};
		} else {
			console.log('School not found with abbreviation:', school_name);
		}
	} catch (error) {
		console.error('Error fetching schools data:', error);
		return {
			props: {}
		};
	}
};
