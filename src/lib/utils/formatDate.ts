// dateUtils.ts

export function formatDate(inputDate: string): string {
	const date = new Date(inputDate);
	const options = { year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const };
	const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
	return formattedDate;
}
